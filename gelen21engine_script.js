// Author: Jordan Randleman - SOP/POS/KMAP/TTABLE Generation Engine

const BAD_LOG2_ARG = -1;
const DONT_CARE_BIT = 2;
const BLANK_BIT = 3;


// Only push unique values, erase an elt, & "length == 0" abbreviation
Array.prototype.insert = function(e) {if(!this.includes(e)) this.push(e);};
Array.prototype.erase = function(e) {return this.filter(elt => elt !== e);};
Array.prototype.empty = function() {return this.length === 0;};


// Reverse string, insert/erase/replace at idx, & "length == 0" abbreviation
String.prototype.reverse = function() {return [...this].reverse().join("");};
String.prototype.insert = function(idx,ch) { // INSERT BEFORE "idx"
  return this.slice(0,idx)+ch+this.slice(idx);
};
String.prototype.erase = function(idx,ch) {  // ERASE AT "idx"
  return this.slice(0,idx)+this.slice(idx+1);
};
String.prototype.replaceAt = function(idx,ch) { // INSERT AFTER "idx"
  return this.slice(0,idx)+ch+this.slice(idx+1);
};
String.prototype.empty = function() {return this.length === 0;};

/******************************************************************************
* ARITHMETIC HELPER FUNCTION
******************************************************************************/

// returns log2(n), OR -1 if n != perfect power of 2
function log2(num) {
  let result = Math.log2(num);
  return (result<0 || result%1!==0) ? BAD_LOG2_ARG : result;
}

/******************************************************************************
* HYPERCUBE ADJACENCY MATRIX FUNCTIONS
******************************************************************************/

/******************************************************************************
 * Labeled Points on Hypercube of Dimension D = 3 & Corresponding 3-Var K-Map *
 *                                                                            *
 *              2 ---------- 3                                                *
 *             /|           /|             ----- ----- ----- -----            *
 *            / |          / |            |  0  |  0  |  0  |  0  |           *
 *           0 ---------- 1  |            |00)  |01)  |03)  |02)  |           *
 *           |  |         |  |             ----- ----- ----- -----            *
 *           |  6 --------|- 7            |  0  |  0  |  0  |  0  |           *
 *           | /          | /             |04)  |05)  |07)  |06)  |           *
 *           |/           |/               ----- ----- ----- -----            *
 *           4 ---------- 5                                                   *
 *                                                                            *
 *****************************************************************************/

// Find all points connected to point P in hypercube of dimension D.
//   => Dimension D repns K-map of D vars, and adjacent points on hypercube
//      repn logically adjacent cells on K-map (thus P == K-map cell idx).
// How: recursively half dimensions to find the point connected to P
//      on the opposite side of the current dimension.
// Ie:  find 4th dim projection of P, then 3rd, then 2nd, and finally 1st
// Time & Space Complexity: O(D)
function find_adjacent_hypercube_points(D, original_D, P, original_P, points_connected_to_P){
  if(D === 0 || P > (1 << original_D)) return;
  const half_of_dimension = (1 << (D-1));
  if(P >= half_of_dimension) {
    points_connected_to_P.push(original_P-half_of_dimension);
    find_adjacent_hypercube_points(D-1, original_D, P-half_of_dimension, original_P, points_connected_to_P);
  } else {
    points_connected_to_P.push(original_P+half_of_dimension);
    find_adjacent_hypercube_points(D-1, original_D, P, original_P, points_connected_to_P);
  }
}


// Returns array of points connected to point P in hypercube of dimension D
// Time & Space Complexity: O(D)
function adjacent_hypercube_points(D, P) {
  let connected_points = [];
  find_adjacent_hypercube_points(D, D, P, P, connected_points);
  return connected_points;
}


// Returns adjacency list for points in dimension D via MxN matrix.
//   => M == parent & N == parent's corresponding adjacent points
// Time & Space Complexity: O(D*2^D)
function dimension_adjacency_matrix(D) {
  let adj_matrix = [];
  for(let P = 0, total_P = (1 << D); P < total_P; ++P)
    adj_matrix.push(adjacent_hypercube_points(D,P).sort());
  return adj_matrix;
}

/******************************************************************************
* NESTED HYPERCUBE CONTAINMENT FUNCTIONS
******************************************************************************/

// Confirms array "points" all fall w/in dimension D's range
// Time  Complexity: O(points.length)
// Space Complexity: O(1)
function points_are_within_D(D, points) {
  const total_D_points = (1 << D);
  if(points.empty() || points.length>total_D_points) return false;
  for(let pt of points) if(pt >= total_D_points) return false;
  return true;
}


// Confirms array "points" forms a hypercube w/in another hypercube dimension's 
//   adjacency matrix.
//   => HYPERCUBE DEFN: 2^n points with n edges btwn one another.
// Time  Complexity: O(points.length^2)
// Space Complexity: O(1)
function adj_matrix_contains_hypercube(adj_matrix, points) {
  const edges_btwn_pts = log2(points.length); // sought subdimension
  for(let pt of points) {
    let edge_counter = 0;
    for(let pt2 of points) if(adj_matrix[pt].includes(pt2)) ++edge_counter;
    if(edge_counter !== edges_btwn_pts) return false;
  }
  return true;
}

/******************************************************************************
* COMBINATIONS HELPER FUNCTIONS
******************************************************************************/

// Recursive fcn to mk a combinations array matrix for "combinations" fcn below
function find_combinations(r, begin, end, group_n, seen, combo_matrix) {
  for(let i = begin; i !== end; ++i) {
    seen.insert(group_n[i]);
    switch(r) {
      case 1:  combo_matrix.insert(seen); break;
      default: find_combinations(r-1, i+1, end, group_n, seen, combo_matrix);
    } 
    seen = seen.erase(group_n[i]);
  }
}


// Returns a matrix of possible combinations length r w/in array group_n
// NOTE: r == group length w/in set "group_n" we are finding combos for
function combinations(r, group_n){
  let combo_matrix = [], seen = [];
  if(r > group_n.length) return [];
  find_combinations(r, 0, group_n.length, group_n, seen, combo_matrix);
  return combo_matrix;
}

/******************************************************************************
* NESTED POINT-OVERLAPPING HYPERCUBES HELPER FUNCTIONS
******************************************************************************/

// Returns a array of indices where "function_bit_values" has a "sought" value
// => "sought_bit" = 1 for SOP (minterm) && 0 for POS (maxterm)
function convert_fcn_to_point_set(function_bit_values, sought_bit, need_to_cover, points){
  for(let i = 0; i < function_bit_values.length; ++i)
    switch(function_bit_values[i]) {
      case sought_bit: points.insert(i); need_to_cover.insert(i); break;
      case DONT_CARE_BIT: points.insert(i);
    }
}


// Confirms given arrays are disjoint
function sets_are_disjoint(set1, set2) {
  for(let elt of set1) if(set2.includes(elt)) return false;
  return true;
}


// Returns greatest hypercube possible w/ "total_vertices" # of vertices
function max_formable_hypercube(max_inner_hypercube_vertices, total_vertices) {
  while(max_inner_hypercube_vertices > total_vertices) 
    max_inner_hypercube_vertices >>= 1;
  return log2(max_inner_hypercube_vertices);
}


// Returns array of matrices w/ possible hypercube coordinate arrangements
// for the given "points" set
function possible_hypercube_combinations(max_inner_hypercube, points) {
  let hypercube_combos = [];
  for(let dim = max_inner_hypercube; dim >= 0; --dim) {
    hypercube_combos.push(combinations((1 << dim), points));
    if(dim === 0) return hypercube_combos;
  }
  return hypercube_combos;
}

/******************************************************************************
* ESSENTIAL PRIME IMPLICANTS FROM PI'S PARSING FUNCTIONS
******************************************************************************/

// Returns array of all unique elts within the dimensionSet matrix
function get_set_of_elts_in_dimension(dimensionSet) {
  let uniqueElts = [];
  for(let dim of dimensionSet)
    for(let point of dim)
      uniqueElts.insert(point);
  return uniqueElts.sort();
}


// Return matrix of all possible combinations of start-to-end groups of
// PI's w/in dimensionSet
function get_all_EPI_candidate_combos(start, end, dimensionSet) {
  let possible_EPI_3D_matrix = [];
  for(let i = start; i <= end; ++i)
    possible_EPI_3D_matrix.insert(combinations(i, dimensionSet));
  return possible_EPI_3D_matrix;
}


// confirm whether point matrix (or epi set) contains all of needToCoverElts
function set_contains_all_elts(subDimensionSet, needToCoverElts) {
  for(let elt of needToCoverElts) {
    let found = false;
    for(let epiSet of subDimensionSet) {
      for(let epi of epiSet)
        if(epi === elt) {
          found = true;
          break;
        }
      if(found) break;
    }
    if(!found) return false;
  }
  return true;
}


// Return EPIs from PIs given in dimensionSet 
// (EPI = Essential Prime Implicant, PI = Prime Implicant)
function EPIs_within_dimensionSet(dimensionSet, desiredCoveredBits) {
  if(dimensionSet.empty()) return [];
  const m = dimensionSet.length;    // number of sub dimensions
  const n = dimensionSet[0].length; // number of points per sub dimension
  const elts_in_dimension = get_set_of_elts_in_dimension(dimensionSet);

  // Unique elts are those we seek to find EPI's covering -- the intersection
  // of desired bits we ultimately seek to completely cover on the Kmap with 
  // the derived set of bits that this current subdimension DOES cover (those 
  // remaining the "desiredCoveredBits" will be covered by a lower dimension)
  let uniqueElts = [];
  for(let elt of elts_in_dimension)
    if(desiredCoveredBits.includes(elt))
      uniqueElts.insert(elt);

  // minimum sets needed to cover all unique elts
  const minimum_sets_to_cover_points = Math.ceil(uniqueElts.length/n); 

  // All potential EPI combos, sorted in ascending length (hence the BEST 
  // (fewer dependancies) epi set will be closer to the front)
  const epi_3D_set_combinations = get_all_EPI_candidate_combos(minimum_sets_to_cover_points, m, dimensionSet); 

  for(let epi_set_combination of epi_3D_set_combinations)
    for(let epi_set of epi_set_combination)
      if(set_contains_all_elts(epi_set, uniqueElts))
        return epi_set;

  return [];
}

/******************************************************************************
* NESTED POINT-OVERLAPPING HYPERCUBES MAIN FUNCTION
******************************************************************************/

// Returns hypercube overlap matrix of vertices in array "points" w/in dimension D
// => IE the arrays of vertices w/in "points" that are K-map logically adjacent!
function max_hypercube_overlap_matrix(D, function_bit_values, sought_bit) {
  let need_to_cover = [], points = [];
  convert_fcn_to_point_set(function_bit_values,sought_bit,need_to_cover,points);
  if(D === 0 || !points_are_within_D(D,points)) return [];

  // find greatest formable hypercube from array "points"
  let max_inner_hypercube = max_formable_hypercube((1<<D), points.length);
  if(max_inner_hypercube > D) return [];

  // adajcency matrix for points in dimension D 
  //   => ie: logical adjacency matrix for cells in K-map of D vars
  const adj_matrix = dimension_adjacency_matrix(D);

  // max overlaps (prime implicants), points (cells) not yet covered, & all 
  //   possible hypercube combos made from "points"
  let max_hypercube_overlaps = []; 
  let hypercube_combos = possible_hypercube_combinations(max_inner_hypercube, points);

  // get formable hypercubes from "points" (prime implicants)
  for(let i = 0; i <= max_inner_hypercube && !need_to_cover.empty(); ++i) {

    // track all hypercubes covering the locally critical points 
    // (points not previously covered by any higher dimension)
    // and parse out EPI's within from a seperate function 
    // (this fcn only serves to ID Prime Implicants not the ESSENTIALS)
    let LOCAL_DIM_NEED_TO_COVER = need_to_cover;
    let local_dim_prime_implicants = [];
    for(let cube_set of hypercube_combos[i]) {
      if(!sets_are_disjoint(cube_set, LOCAL_DIM_NEED_TO_COVER) && adj_matrix_contains_hypercube(adj_matrix, cube_set)) {

        // erase found cube's pts from array "need_to_cover"
        for(let pt of cube_set) need_to_cover = need_to_cover.erase(pt);
        // save dimension/hypercube formed
        local_dim_prime_implicants.insert(cube_set);
        // erase subset dimensions of the found dimension
        for(let j = i+1; j <= max_inner_hypercube; ++j)
          for(let sub_cube_set of hypercube_combos[j])
            if(sets_are_disjoint(sub_cube_set, need_to_cover))
              hypercube_combos[j] = hypercube_combos[j].erase(sub_cube_set);
      }
    }

    // Parse & save essential prime implicants from the current dimension's PI's
    let epi_set = EPIs_within_dimensionSet(local_dim_prime_implicants, LOCAL_DIM_NEED_TO_COVER);
    for(let epi of epi_set)
      max_hypercube_overlaps.insert(epi);
  }
  return max_hypercube_overlaps;
}

/******************************************************************************
* SOP-POS FUNCTION GENERATION HELPER FUNCTIONS
******************************************************************************/

// Confirms valid SOP / POS variable names given
function validate_sop_pos_vars(var_names) {
  const reserved = "()+.^'!&|[]";
  for(let i = 0; i < var_names.length; ++i) {
    // Check for reserved characters
    for(let ch of reserved) 
      if(var_names[i].indexOf(ch) > -1) 
        return false;
    // Check for duplicate names
    for(let j = i+1; j < var_names.length; ++j)
      if(var_names[i] === var_names[j])
        return false;
  }
  return true;
}


// Check whether fcn is only 0's or 1's.
// Returns 0 for false, else the uniform bit+1 (ie returning 1 == only 0's)
function uniform_fcn_result(fcn_bit_values){
  if(fcn_bit_values.empty()) return 0;
  let val1 = 2;
  for(let elt of fcn_bit_values) 
    if(elt !== 2) { val1 = elt; break; }
  if(val1 === 2) return 1; // returns uniform 0 for all "Don't Cares"
  for(let elt of fcn_bit_values) 
    if(elt !== val1 && elt !== DONT_CARE_BIT) return 0;
  return val1+1;
}


// Applies a function across a generated Truth Table of n vars & 
// returns an array w/ the results. 
// => NOTE: THE FUNCTION SHALL RETURN 0, 1, OR "DONT_CARE_BIT" 
//          & ACCEPT AN ARRAY OF BITS AS ITS ONLY ARG
function apply_user_TT_func(n, user_func) {
  let fcn_result = [];
  if(n === 0) return [];
  for(let counter = 0, rows = 1<<n; counter < rows; ++counter) {
    let row_result = [];
    for(let shift = n-1; shift >= 0; --shift) {
      row_result.push((counter >> shift) & 1);
      if(shift === 0) break;
    }
    fcn_result.push(Number(user_func(row_result)));
  }
  return fcn_result;
}


// Returns whether var v is w/in domain of var #N for dimension D
function v_in_var_N_domain(D, N, v) {
  if(N >= D)  return false;
  if(N === 0) return (v&1); // odds
  if(N === 1) return (!(v&1) && (v&3)) || (!((v-1)&1) && ((v-1)&3)); // %2 & !%4
  const start = (1<<N), end = (1<<(N+1)), max_k = (1<<(D-N-1));
  let k = 0;
  while(k < max_k) {
    if(v >= start+(end*k) && v < end+(end*k)) return true;
    ++k;
  }
  return false;
}


// Returns whether all "overlap_cube" points are in domain of variable N (1)
//         or whether none of the points are in the domain              (-1)
//         or some are in the domain but others aren't                   (0)
function total_or_empty_set_intersection(D, N, overlap_cube) {
  let total_overlap = 0, no_overlap = 0;
  for(let v of overlap_cube) { // for each point in cube
    if(v_in_var_N_domain(D, N, v))
      ++total_overlap;
    else
      ++no_overlap;
    if(no_overlap && total_overlap) return 0;
  }
  return total_overlap ? 1 : -1;
}


// Given variable names and fcn bit values, returns string of fcn in SOP/POS form
// => NOTE: variable names in "var_names" shall be listed in descending bit 
//          significance (ie var_names[0] == MSB && var_names[n-1] == LSB).
// => NOTE: bits in "fcn_bit_values" shall be listed in top-down order as if
//          read from a truth table.
// => "sought_bit" = 1 for SOP (minterm) && 0 for POS (maxterm)
function get_SOP_or_POS(var_names, fcn_bit_values, sought_bit) {
  if(!validate_sop_pos_vars(var_names)) {
    console.error("\x1b[1mget_SOP_or_POS:\x1b[31mERROR:\x1b[0m" + 
      "\x1b[1m SOP/POS Duplicate Name OR Reserved Character Found in Variable Names!\x1b[0m\n" +
      " => Variables MUST NOT CONTAIN ANY OF THE FOLLOWING: \"()+.^'!&|[]\"\n" +
      " => Returning Empty String.");
    return "";
  }

  const D = log2(fcn_bit_values.length);
  if(D === -1 || var_names.length !== D || fcn_bit_values.length > (1 << D)) 
    return "";
  let uniform = uniform_fcn_result(fcn_bit_values);
  if(uniform) return (uniform-1).toString(10);

  var_names = var_names.reverse(); // var-pt domain fcns work backwards
  let SOP_POS_FORM = "";
  let inner_operation = sought_bit ? '.' : '+'; // SOP or POS
  let outer_operation = sought_bit ? '+' : '.'; // SOP or POS
  let overlapping_cubes = max_hypercube_overlap_matrix(D, fcn_bit_values, sought_bit);
  
  for(let overlap_cube of overlapping_cubes) { // for each cube
    let cube_vars = [], cube_compl_vars = [];
    
    for(let N = 0; N < D; ++N) // for each var
      switch(total_or_empty_set_intersection(D, N, overlap_cube)) {
        case 1:  cube_vars.push(N); break;
        case -1: cube_compl_vars.push(N);
      } 

    if(!SOP_POS_FORM.empty()) SOP_POS_FORM += outer_operation;
    SOP_POS_FORM += '(';

    const total_vars = cube_vars.length;
    const total_compl_vars = cube_compl_vars.length;

    for(let i = 0; i < total_vars; ++i) {
      SOP_POS_FORM += var_names[cube_vars[i]];
      if(!sought_bit) SOP_POS_FORM += '\''; // negate POS here
      if(i < total_vars-1) SOP_POS_FORM += inner_operation;
    }
    if(!cube_compl_vars.empty() && 
      SOP_POS_FORM[SOP_POS_FORM.length-1] !== inner_operation && 
      SOP_POS_FORM[SOP_POS_FORM.length-1] !== '(')
      SOP_POS_FORM += inner_operation;
    for(let i = 0; i < total_compl_vars; ++i) {
      SOP_POS_FORM += var_names[cube_compl_vars[i]];
      if(sought_bit) SOP_POS_FORM += '\''; // negate SOP here
      if(i < total_compl_vars-1) SOP_POS_FORM += inner_operation;
    }
    SOP_POS_FORM += ')';
  }

  return SOP_POS_FORM;
}

/******************************************************************************
* FUNCTION MANIPULATION HELPER FUNCTION
******************************************************************************/

// Returns fcn w/o double paren-based negations ( ie "(var')'" => "(var)" )
function rmv_double_compl(fcn) {
  if(fcn.empty()) return "";
  const reserved_chars = "()+.^'";
  const n = fcn.length;
  let cleaned_fcn = "";

  for(let i = 0; i < n; ++i) {
    // find next parens
    while(i < n && fcn[i] !== '(') cleaned_fcn += fcn[i++];
    if(i === n) return cleaned_fcn;
    
    // determine if parens only contain 1 literal
    let scout = i+1;
    while(scout < n && reserved_chars.indexOf(fcn[scout])===-1) ++scout;
    while(i < scout) cleaned_fcn += fcn[i++];
    
    // skip double negation if present, else cpy string as is
    if(scout < n-2 && fcn[scout] === '\'' 
      && fcn[scout+1] === ')' && fcn[scout+2] === '\'')
      cleaned_fcn += ')', i += 2;
    else if(i < n)
      cleaned_fcn += fcn[i];
  }
  return cleaned_fcn;
}

/******************************************************************************
* TRUTH TABLE GENERATION HELPER FUNCTIONS
******************************************************************************/

// Verifies matrix of truth table fcn results = same size & a power of 2
function verify_valid_truth_table_fcn_result_matrix(fcn_results) {
  const clearNewline = "\x1b[0m\n";
  if(fcn_results.empty()) {
    console.error(
      "\x1b[1mverify_valid_truth_table_fcn_result_matrix:\x1b[31mERROR:\x1b[0m" + 
      "\x1b[1m INVALID (empty) FUNCTION RESULTS MATRIX GIVEN!" + clearNewline);
    return false;
  }

  const n = fcn_results[0].length;
  for(let res of fcn_results)
    if(res.length != n) {
      console.error(
        "\x1b[1mverify_valid_truth_table_fcn_result_matrix:\x1b[31mERROR:\x1b[0m" + 
        "\x1b[1m INVALID FUNCTION RESULTS MATRIX GIVEN!" + clearNewline +
        " => Result vectors != same length, hence cannot derive truth table.\n");
      return false;
    }

  if(log2(n) === BAD_LOG2_ARG) {
    console.error(
      "\x1b[1mverify_valid_truth_table_fcn_result_matrix:\x1b[31mERROR:\x1b[0m" + 
      "\x1b[1m INVALID FUNCTION RESULTS MATRIX GIVEN, RESULT SIZES != POWER OF 2!" + 
      clearNewline);
    return false;
  }
  return true;
}


// Returns the Truth Table's header delimiter (the dashes under the bit labels)
function TruthTable_delimiter(bit_No, func_No = 0) {
  let sum = 0;
  for(let i = 0; i < bit_No; ++i) 
    sum += i.toString().length;
  for(let i = 0; i < func_No; ++i) 
    sum += i.toString().length;
  return (func_No>0) 
          ? '\n'+("-".repeat(8+bit_No+func_No+sum))+'\n'
          : '\n'+("-".repeat(4+bit_No+sum))+'\n';
}


// Returns labeling for a Truth Table bit row
function bitRowLabel(counter) {
  const length = counter.toString().length;
  const idxLabel = counter.toString()+':<span class="blackout df">_</span>';
  switch(length) {
    case 1: return '<span class="blackout df">___</span>'+idxLabel;
    case 2: return '<span class="blackout df">__</span>'+idxLabel;
    case 3: return '<span class="blackout df">_</span>'+idxLabel;
    default: return idxLabel;
  }
}


// Returns alignment spacing + '\n' behind each bit row
function bitRowNewline(counter) {
  const length = counter.toString().length-4;
  if(length < 1) return "\n";
  return '<span class="blackout df">'+('_'.repeat(length))+'</span>\n';
}


// Returns string w/ current bit aligned
function bitGraphic(counter,shift,bit_No) {
  return `${((counter >> shift) & 1)}`+
         '<span class="blackout df">'+
         ("_".repeat((bit_No-1-shift).toString().length))+
         '</span>';
}


// Returns string w/ current function result bit aligned
function fcnBitGraphic(res,counter,fcn_No) {
  return ((res[counter]===DONT_CARE_BIT) ? "X" : res[counter].toString()) +
          '<span class="blackout df">' + 
          ("_".repeat(fcn_No.toString().length)) + 
          '</span>';
}


// Returns a string of blacked-out (& non-visible) spaces
function space(totalSpaces) {
  return '<span class="blackout df">' + '_'.repeat(totalSpaces) + '</span>';
}


// Returns Truth Table for given a matrix of truth table function results.
function TruthTable_str_functionResultBitMatrix(fcn_results) {
  if(!verify_valid_truth_table_fcn_result_matrix(fcn_results)) return "";
  const bit_No = log2(fcn_results[0].length);
  if(bit_No === 0) return "";
  const ROWS = (1 << bit_No);
  const has_fcns = !fcn_results.empty();

  let truth_table_str = "Bit:";
  for(let i = 0; i < bit_No; ++i) truth_table_str += space(1)+`${i}`;
  if(has_fcns) {
    truth_table_str += `${space(1)}|${space(1)}F`;
    for(let i = 0; i < fcn_results.length; ++i) truth_table_str += space(1)+`${i}`;
  }
  truth_table_str += TruthTable_delimiter(bit_No,fcn_results.length);

  for(let counter = 0; counter < ROWS; ++counter) {
    truth_table_str += bitRowLabel(counter);
    for(let shift = bit_No-1; shift >= 0; --shift) {
      truth_table_str += bitGraphic(counter, shift, bit_No);
      if(shift == 0) break;
    }
    if(has_fcns) {
      truth_table_str += '|'+space(3);
      let i = 0;
      for(let res of fcn_results) {
        truth_table_str += fcnBitGraphic(res,counter,i);
        ++i;
      }
    }
    truth_table_str += bitRowNewline(counter);
  }
  return truth_table_str;
}


// Returns Truth Table for "bit_No" bits & fcn results from an array of fcns
//   to apply to the table.
function TruthTable_str_functionArray(bit_No, fcns_vec){
  if(bit_No == 0) return "";
  const total_fcns = fcns_vec.length;
  const ROWS = (1 << bit_No);
  
  let fcn_results = [];
  for(let i = 0; i < total_fcns; ++i) 
    fcn_results.push([]);

  for(let counter = 0; counter < ROWS; ++counter) {
    let row = [];
    // Get row of truth table bits
    for(let shift = bit_No-1; shift >= 0; --shift) {
      row.push((counter >> shift) & 1);
      if(shift == 0) break;
    }
    // Get result from each function acting on the row
    for(let i = 0; i < total_fcns; ++i)
      fcn_results[i].push(Number(fcns_vec[i](row)));
  }
  return TruthTable_str_functionResultBitMatrix(fcn_results);
}


// Returns Truth Table for "bit_No" bits.
function TruthTable_str_blank(bit_No) {
  if(bit_No === 0) return "";
  const ROWS = (1 << bit_No);
  
  let truth_table_str = "Bit:";
  for(let i = 0; i < bit_No; ++i) 
    truth_table_str += space(1)+`${i}`;
  truth_table_str += TruthTable_delimiter(bit_No);

  for(let counter = 0; counter < ROWS; ++counter) {
    truth_table_str += bitRowLabel(counter);
    for(let shift = bit_No-1; shift >= 0; --shift) {
      truth_table_str += bitGraphic(counter, shift, bit_No);
      if(shift == 0) break;
    }
    truth_table_str += bitRowNewline(counter);
  }
  return truth_table_str;
}

/******************************************************************************
* K-MAP GENERATION HELPER FUNCTIONS
******************************************************************************/

// KMAP-Printer function error handler
function verify_vector_is_kmappable(TOTAL_RESULTS, LOG_VAL) {
  const clearNewline = "\x1b[0m\n";
  if(TOTAL_RESULTS === 0) {
    console.error(
      "\x1b[1mverify_valid_truth_table_fcn_result_matrix:\x1b[31mERROR:\x1b[0m" + 
      "\x1b[1m INVALID (EMPTY) ARRAY OF FUNCTION VALUES != PRINTABLE KMAP!" + 
      clearNewline);
    return false;
  } 
  if(LOG_VAL === BAD_LOG2_ARG) {
    console.error(
      "\x1b[1mverify_valid_truth_table_fcn_result_matrix:\x1b[31mERROR:\x1b[0m" + 
      "\x1b[1m INVALID ARRAY GIVEN FOR KMAP: LENGTH != POWER OF 2!" + 
      clearNewline +
      " => HENCE \x1b[1mNOT\x1b[0m A TRUTHTABLE RESULT (AS REQUIRED)!");
    return false;
  }
  return true;
}


// Given array of truth table fcn values, returns its kmap layout. 
// SAMPLE KMAP LAYOUT INTERPRETATION: 
// => B(n), where lower n == more significant bit
//    0  0 B2 B2
// 0             0
// 0             B1
// B0            B1
// B0            0
//    0 B3 B3  0
function Kmap_str_bitArr(function_bit_values, style_kmap_var_sections = true) {
  // Cell ASCII Layout
  const spaceX2 = '<span class="blackout df">__</span>',
        spaceX1 = '<span class="blackout df">_</span>';
  const cell_top      = '-----', cell_topleft = '|'+spaceX2, 
        cell_topright = spaceX2, cell_botleft = "|",  
        cell_botright = spaceX2, new_cell_row = "|\n";
  const MSB3_OTAG     = `<span style="color:lime;">`, 
        MSB3_CTAG     = "</span>";

  // KMAP Constants
  const TOTAL_RESULTS          = function_bit_values.length;
  const bit_No                 = log2(TOTAL_RESULTS);
  const ROWS                   = (bit_No<4)?(bit_No<3)?1:2:4,
        COLS                   = (bit_No==1)?2:4,
        FCN_VALS_PER_4VAR_KMAP = 16,
        kmap_truthTable_idx    = [[0,1,3,2],[4,5,7,6],[12,13,15,14],[8,9,11,10]];
  if(!verify_vector_is_kmappable(TOTAL_RESULTS, bit_No)) return "";

  // Output Formatting to Discern Variable Map Sections
  let i = 0, j = 0;
  const MSB2  = "border:1px solid blue;"; // MOST-SIGNIFICANT-BIT[2] BLUE OUTLINE 
  const MSB1  = "color:red;";             // MOST-SIGNIFICANT-BIT[1] RED FONT 
  const MSB00 = `color:black;background-color:yellow;`;               // MOST-SIGNIFICANT-BIT[0] INVERT TEXT/BACK COLORS LEFT MID COLUMN
  const MSB01 = `color:black;background-color:${MSB1.split(':')[1]}`; // MOST-SIGNIFICANT-BIT[0] INVERT TEXT/BACK COLORS RIGHT MID COLUMN
  const kmap_section_styles = 
  [
    "",   MSB00,      MSB01,      MSB1, 
    MSB2, MSB00+MSB2, MSB01+MSB2, MSB1+MSB2, 
    MSB2, MSB00+MSB2, MSB01+MSB2, MSB1+MSB2, 
    "",   MSB00,      MSB01,      MSB1
  ];

  // Formatting Lambdas
  let format = (i,j,ROWS,style_kmap_var_sections,kmap_section_styles) => {
    if(i===ROWS)i=ROWS-1;
    return(style_kmap_var_sections)?'<span style="'+kmap_section_styles[i*4+j]+'">':"";
  };
  let clearFormat = (style_kmap_var_sections) => {
    return(style_kmap_var_sections)?"</span>":"";
  };
  let format_MSB3 = (BOT_4VAR_MAP,MSB3_OTAG,MSB3_CTAG,delimiter) => {
    return (BOT_4VAR_MAP?MSB3_OTAG:"")+delimiter+((BOT_4VAR_MAP?MSB3_CTAG:""));
  };
  let format_rowDelimiter = (condition,MSB3_OTAG,MSB3_CTAG,cell_top,top_extend,j,COLS,spaceX1) => {
    return (condition?MSB3_OTAG:"")+cell_top+top_extend+(condition?MSB3_CTAG:"")+((j<COLS-1)?spaceX1:'');
  }

  let kmap_str = "";

  // Formatting Explanation:
  if(style_kmap_var_sections) {
    kmap_str += `\>\> "MSB[n]" == "M(ost)S(gfnt)B(it)[descending]"`;
    if(bit_No >= 4) kmap_str += '<br><br><span style="border:2px dashed green">MSB[3] GREEN BORDER</span>';
    if(bit_No >= 3) kmap_str += '<br><br><span style="border:1px solid blue;">MSB[2] BLUE OUTLINE</span>';
    if(bit_No >= 2) kmap_str += '<br><br><span style="color:red;">MSB[1] RED FONT</span>';
    if(bit_No >= 1) kmap_str += '<br><br><span style="background-color:yellow;color:black;">MSB[0] INVERT TEXT/BACK COLORS</span>';
    kmap_str += '<br><br>';
  }

  for(let kmap4var_instanceNo = 0; kmap4var_instanceNo < TOTAL_RESULTS; 
  kmap4var_instanceNo+=FCN_VALS_PER_4VAR_KMAP) {
    
    let extension = (kmap4var_instanceNo+FCN_VALS_PER_4VAR_KMAP-1).toString().length;
    extension = (extension > 2) ? (extension - 2) : 0;
    let top_extend  = "-".repeat(extension), 
        side_extend = '<span class="blackout df">' + ("_".repeat(extension)) + "</span>";
    // for each 4-var kmap composing total kmap (ie 1 if 4-var fcn, 2 if 5-var, & 4 if 6-var)
    for(i = 0; i < ROWS; ++i) {
      const BOT_4VAR_MAP = (i>1); // whether or not currently in the bot 1/2 of a 4+ var Kmap

      // print kmap row delimiter
      for(j = 0; j < COLS; ++j) 
        kmap_str += format_rowDelimiter(BOT_4VAR_MAP,MSB3_OTAG,MSB3_CTAG,cell_top,top_extend,j,COLS,spaceX1);
      kmap_str += "\n";
      
      // print kmap function values
      for(j = 0; j < COLS; ++j) {
        let funcBit = function_bit_values[kmap_truthTable_idx[i][j]+kmap4var_instanceNo];
        kmap_str += format_MSB3(BOT_4VAR_MAP,MSB3_OTAG,MSB3_CTAG,cell_topleft)+
                    format(i,j,ROWS,style_kmap_var_sections,kmap_section_styles)+
                    ((funcBit===DONT_CARE_BIT) ? 
                      "X" : (funcBit===BLANK_BIT) ? 
                        ' ' : (funcBit).toString()) +
                    clearFormat(style_kmap_var_sections) +
                    cell_topright+side_extend;
      }
      kmap_str += format_MSB3(BOT_4VAR_MAP,MSB3_OTAG,MSB3_CTAG,new_cell_row);
      
      // print kmap idxs
      for(j = 0; j < COLS; ++j) {
        const idx_length = (kmap_truthTable_idx[i][j]+kmap4var_instanceNo).toString().length;
        kmap_str += format_MSB3(BOT_4VAR_MAP,MSB3_OTAG,MSB3_CTAG,cell_botleft)+
                    format(i,j,ROWS,style_kmap_var_sections,kmap_section_styles) +
                    ((kmap_truthTable_idx[i][j]+kmap4var_instanceNo<10)?"0":"") +
                    (kmap_truthTable_idx[i][j]+kmap4var_instanceNo).toString() + `)` +
                    clearFormat(style_kmap_var_sections) +
                    cell_botright +
                    ((idx_length>1 && idx_length-2<extension) ? ('</span>'+spaceX1) : "");
      }
      kmap_str += format_MSB3(BOT_4VAR_MAP,MSB3_OTAG,MSB3_CTAG,new_cell_row);
    }

    // print kmap footer delimiter
    for(j = 0; j < COLS; ++j) 
      kmap_str += format_rowDelimiter((ROWS>2),MSB3_OTAG,MSB3_CTAG,cell_top,top_extend,j,COLS,spaceX1);
    kmap_str += "\n\n";

  } // end "kmap4var_instanceNo" for loop
  return kmap_str;
} // end function


// Given kmap's # of bits (n) & a fcn to apply across a truth table of n-bits, 
//   prints the corresponding kmap layout of the fcn.
function Kmap_str_func(n, bit_row_fcn, style_kmap_var_sections = true) {
  let fcn_result = [];
  if(n === 0) return "";
  for(let counter = 0, rows = 1<<n; counter < rows; ++counter) {
    let row_result = [];
    for(let shift = n-1; shift >= 0; --shift) {
      row_result.push((counter >> shift) & 1);
      if(shift === 0) break;
    }
    fcn_result.push(Number(bit_row_fcn(row_result)));
  }
  return Kmap_str_bitArr(fcn_result, style_kmap_var_sections);
}

/******************************************************************************
* XOR-SUBSTITUTION FOR FCN-STRS MAIN FUNCTION
******************************************************************************/

function xor_replace(fcn) {
  if(fcn.empty()) return "";
  const AND   = "\\.", OR  = "\\+", ONE = "\\1", TWO = "\\2";
  const BEGIN = "\\(", END = "\\)(?!')";
  const VAR   = "([^\\(\\)\\+\\.\\^']+)";
  const SOP_CONJUNCT = "\\)(([^'|.]*)\\+(.*))\\(";
  const POS_CONJUNCT = "\\)(([^'|.]*)\\.(.*))\\(";
  const NOT = (NOT_VAR) => NOT_VAR+"'";
  
  const TOTAL_XORS = 4; 
  const XOR_RANGE  = (TOTAL_XORS/2)-1;

  /*
   * Parser's XOR-XNOR Interpretation:
   * xor_SOP  = A.B'  + B.A'
   * xor_POS  = A+B   . A'+B'
   * xnor_SOP = A'.B' + A.B
   * xnor_POS = A'+B  . B'+A
   */

  let replaceXorVariants = (str, pattern, xor_or_xnor) => {
    let match, found = true;
    while(found) {
      found = false;
      while(match = pattern.exec(str)) {
        str = str.replace(
          match[0], 
          `(${match[1]}${xor_or_xnor}${match[2]})${match[3].substr(0,match[3].length-1)}`
        );
        found = true;
      }
    }
    return str;
  };

  const xorsPatterns = [ // xor_SOP, xor_POS, xnor_SOP, xnor_POS
    RegExp(BEGIN+VAR+AND+NOT(VAR)+SOP_CONJUNCT+TWO+AND+NOT(ONE)+END, 'g'),
    RegExp(BEGIN+VAR+OR+VAR+POS_CONJUNCT+NOT(ONE)+OR+NOT(TWO)+END, 'g'),
    RegExp(BEGIN+NOT(VAR)+AND+NOT(VAR)+SOP_CONJUNCT+ONE+AND+TWO+END, 'g'),
    RegExp(BEGIN+NOT(VAR)+OR+VAR+POS_CONJUNCT+NOT(TWO)+OR+ONE+END, 'g')
  ];

  for(let i = 0; i < TOTAL_XORS; ++i)
    fcn = replaceXorVariants(fcn,xorsPatterns[i],(i>XOR_RANGE)?"'^":"^");
  return fcn;
}

/******************************************************************************
* FUNCTION MANIPULATION MAIN FUNCTIONS
******************************************************************************/

// Returns fcn w/ its literals complemented
function compl_literals(fcn) {
  if(fcn.empty()) return "";
  const reserved_chars = "()+.^";
  let rfcn = fcn.reverse();
  let i = 0;
  while(i < rfcn.length) {
    // if at a literal, rmv or add complement
    if(reserved_chars.indexOf(rfcn[i])===-1 && 
      ((rfcn[i] === '\'' && rfcn[i+1] !== ')') || rfcn[i] !== '\'')) {
      rfcn = (rfcn[i]!=='\'') ? rfcn.insert(i, '\'') : rfcn.erase(i);
      while(i < rfcn.length && reserved_chars.indexOf(rfcn[i])===-1) ++i;
    } else ++i;
  }
  fcn = rfcn.reverse();
  return rmv_double_compl(fcn);
}


// Returns dual of the fcn (swap '+' & '.', negate '^' (as XOR dual == XNOR))
function dual_fcn(fcn) {
  if(fcn.empty()) return "";
  const reserved_chars = "+.^";
  // swap '+' & '.', negate '^' to become XNOR (or XNOR to XOR)
  for(let i = 0; i < fcn.length; ++i) {
    switch(fcn[i]) {
      case '+': fcn = fcn.replaceAt(i, '.'); break;
      case '.': fcn = fcn.replaceAt(i, '+'); break;
      case '^': switch(fcn[i-1]) {
                  case '\'': fcn = fcn.erase(i-1); break;
                  default:   fcn = fcn.insert(i++, '\'');
                }
    }
  }
  return rmv_double_compl(fcn);
}


// Returns complement of the fcn (dual + negated literals)
function compl_fcn(fcn){
  return compl_literals(dual_fcn(fcn));
}

/******************************************************************************
* SOP-POS FUNCTION GENERATION MAIN FUNCTIONS
******************************************************************************/

// => NOTE: Both "SOP_str" & "POS_str" have 2 versions, the 1st arg for all of 
//          which is an array of strings of variable names, and the 2nd arg a:
//           - fcn to invoke on a generated truth table for the given variables
//               => NOTE: THE FCN SHALL RETURN 1, 0, OR THE "DONT_CARE_BIT" &
//                  ACCEPT AN ARRAY OF 1'S & 0'S AS ITS ARG
//           - array of 1's, 0's, or "DONT_CARE_BIT"s from fcn results 
//               (ie a truth table's fcn "column")

// Returns string of given fcn in SOP form using variable names from array
// => NOTE: variable names in "var_names" shall be listed in descending bit 
//          significance (ie var_names[0] == MSB && var_names[n-1] == LSB).
// => NOTE: bits in "fcn_bit_values" shall be listed in top-down order as if
//          read from a truth table.
function SOP_str(var_names, lambda_or_fcn_bits){
  if(typeof lambda_or_fcn_bits === "object")
    return get_SOP_or_POS(var_names, lambda_or_fcn_bits, 1);
  else 
    return get_SOP_or_POS(var_names, 
      apply_user_TT_func(var_names.length, lambda_or_fcn_bits), 1);
}


// Returns string of given fcn in POS form using variable names from array
// => NOTE: variable names in "var_names" shall be listed in descending bit 
//          significance (ie var_names[0] == MSB && var_names[n-1] == LSB).
// => NOTE: bits in "fcn_bit_values" shall be listed in top-down order as if
//          read from a truth table.
function POS_str(var_names, lambda_or_fcn_bits){
  if(typeof lambda_or_fcn_bits === "object")
    return get_SOP_or_POS(var_names, lambda_or_fcn_bits, 0);
  else 
    return get_SOP_or_POS(var_names, 
      apply_user_TT_func(var_names.length, lambda_or_fcn_bits), 0);
}

/******************************************************************************
* TRUTH TABLE FUNCTION APPLICATION MAIN FUNCTION
******************************************************************************/

// Applies given fcn across an n-bit truth table, returning vector of results.
function TruthTable_fcn(n, func) {
  let results = [];
  if(n === 0) return [];
  for(let counter = 0, rows = (1<<n); counter < rows; ++counter){
    let row = [];
    for(let shift = n-1; shift >= 0; --shift) {
      row.push((counter >> shift) & 1);
      if(shift === 0) break;
    }
    results.push(Number(func(row)));
  }
  return results;
}

/******************************************************************************
* TRUTH TABLE GENERATION MAIN FUNCTION
******************************************************************************/

// Controller fcn delegating which other Truthable mk'ing fcn ought to be called.
function TruthTable_str(bitNo_or_bitArr, func_or_funcArr) {
  let truth_table_str = "";
  if(typeof bitNo_or_bitArr === "number") {      // bit_No
    if(!func_or_funcArr)                         // return blank truth table
      return TruthTable_str_blank(bitNo_or_bitArr);
    if(typeof func_or_funcArr === "object")      // funcArr
      return TruthTable_str_functionArray(bitNo_or_bitArr, func_or_funcArr);
    return TruthTable_str_functionArray(bitNo_or_bitArr, [func_or_funcArr]); // func
  }
  if(typeof bitNo_or_bitArr[0] === "object")   // bit matrix
    return TruthTable_str_functionResultBitMatrix(bitNo_or_bitArr);
  return TruthTable_str_functionResultBitMatrix([bitNo_or_bitArr]); // bit array
}

/******************************************************************************
* K-MAP GENERATION MAIN FUNCTION
******************************************************************************/

// Controller fcn delegating which other Kmap mk'ing fcn ought to be called.
function Kmap_str(n, func_or_style, style) {
  if(typeof n === "number") {
    if(!func_or_style) 
      return Kmap_str_func(n, (bits)=>3, style);   // return blank kmap
    return Kmap_str_func(n, func_or_style, style); // kmap given bit# & fcn
  } 
  return Kmap_str_bitArr(n, func_or_style);        // kmap given bit array
}

/******************************************************************************
* FACULTY CONSOLIDATION:
******************************************************************************/

/*
=> SAMPLE INSTANTIATIONS OF CURRENT OFFERED FUNCTIONALITIES:

SOP_str(array[string], array[bit])
SOP_str(array[string], function)

POS_str(array[string], array[bit])
POS_str(array[string], function)

compl_fcn(string)
compl_literals(string)
dual_fcn(string)
xor_replace(string)

Kmap_str(number) // blank kmap
Kmap_str(number, function) // kmap + applied function
Kmap_str(array[bit]) // kmap of given 1 fcn bit results

TruthTable_str(number) // blank TT
TruthTable_str(number, function) // TT of 1 function
TruthTable_str(number, array[function]) // TT of n functions
TruthTable_str(array[bit]) // TT of 1 given fcn bit results
TruthTable_str(matrix[bit]) // TT of n given fcn bit results
*/
