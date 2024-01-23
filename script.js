// your code here
function firstNonRepeatedChar(str) {
 // Write your code here
	const map = {};
	for(let i=0; i<str.length; i++){
		if(map[str.charAt(i)] == undefined){
            
			
            map[str.charAt(i)] = 1;
            // console.log(map);
		}
		else{
            // console.log('else')
			map[str.charAt(i)] = map[str.charAt(i)]+1;
		}
	}
    // console.log(map);
	for( char in map){
			if(map[char] == 1){
				return char;
			}
		}
	return null
}
// console.log(firstNonRepeatedChar('aadccb'))
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
