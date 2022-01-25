class Solution {
    
    sort012(arr, N)
    {
        let zeroCount = 0;
        let oneCount = 0;
        let twoCount = 0;
        let sum = 0;
        let index = 0;
        arr.forEach(num => {
            if(num==0) {
                arr[index++] = 0;
                zeroCount++;
            } else if (num == 1) {
                oneCount++;
            } else {
                twoCount++;
            }
            sum+=num;
        });
        for(let i=zeroCount; i<zeroCount+oneCount; i++) {
            arr[i] = 1;
        }
        for(let i=zeroCount+oneCount; i<N; i++) {
            arr[i] = 2;
        }
        return arr;
    }
}
