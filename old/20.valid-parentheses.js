/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.02%)
 * Total Accepted:    665K
 * Total Submissions: 1.8M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  s = s.split('')
  if(s.length == 0){
    return true
  }else if( s.length % 2 !== 0){
    return false
  }
  var regstr = new RegExp("[\(\[\{]")
  var arr = []
  for(var i = 0; i < s.length; i++){
    if(regstr.test(s[i])){
      arr.push(s[i])
    }else{
      switch(s[i]){
        case ')':
          if(arr.pop() !== '(') return false
          break;
        case ']':
          if(arr.pop() !== '[') return false
          break;
        case '}':
          if(arr.pop() !== '{') return false
          break;
        default:
          return false
          break;
      }
    }
  }
  if( i == s.length && arr.length === 0){
    return true
  }else{
    return false
  }
};
