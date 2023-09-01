/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    if(p.length) {
        return s.length == 0;
    }
    let first_match = (!(s.length == 0) && (p.charAt(0) == s.charAt(0) ||  
        p.charAt(0) == ".")); 
    
    if(p.length >= 2 && p.charAt(1) == "*") {
        return (isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), pattern)));
    }else {
        return first_match && isMatch(s.substring(1), p.substring(1));
    }
};
