/**
 * @param {string} s
 * @return {string}
 */

const getLongestPali = (leftPointer, rightPointer, s) => {
  let tempStr = "";
  if (rightPointer - leftPointer === 2) {
    tempStr = s[(rightPointer + leftPointer) / 2];
  }
  while (
    s[leftPointer] === s[rightPointer] &&
    leftPointer >= 0 &&
    rightPointer < s.length
  ) {
    tempStr = s[leftPointer] + tempStr + s[rightPointer];
    leftPointer--;
    rightPointer++;
  }
  return tempStr;
};
function longestPalindrome(s) {
  let longestPali = "";
  if (s.length < 2) {
    longestPali = s[0];
  }

  for (let i = 0; i < s.length; i++) {
    let even = "";
    let odd = "";
    if (s[i - 1] === s[i]) {
      even = getLongestPali(i - 1, i, s);
    }
    if (s[i - 1] === s[i + 1]) {
      odd = getLongestPali(i - 1, i + 1, s);
    }
    let tempMax = "";

    if (even.length > odd.length) {
      tempMax = even;
    } else {
      tempMax = odd;
    }

    if (tempMax.length > longestPali.length) {
      longestPali = tempMax;
    }
  }
  return longestPali;
}

sss = "aaaaaaabbbbbb";
ss =
  "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa";
s =
  "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc";
console.log(longestPalindrome(s));
