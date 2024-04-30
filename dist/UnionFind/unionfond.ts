class UFind {
    n: number;
    parent:number[] = [];
    rank:number[] = [];
    constructor (n: number){
        this.n = n;
        for(var i = 0; i < n ; i++){
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    find (num1: number) : number{
        if(num1 == this.parent[num1]){
          return num1;
        }
        return this.parent[num1] = this.find(this.parent[num1]);
    }

    union (num1: number , num2:number) : void{
        var id1 = this.parent[num1];
        var id2 = this.parent[num2];
        if(id1 == id2){
            return;
        }
        if(this.rank[id1] > this.rank[id2]){
          this.parent[id2] = id1;
        }else if(this.rank[id1] < this.rank[id2]){
          this.parent[id1] = id2;
        }else {
          this.parent[id1] = id2;
          this.rank[id1] += 1;
        }
        //this.arr[num1 - 1] = id2;
    }
}

const Unionfind = new UFind(5);
Unionfind.union(2 , 3);
console.log("first union " , Unionfind.parent);
Unionfind.union(3 , 4);
console.log("second union " , Unionfind.parent);
console.log("Parents of 2 and 4 are same : " , Unionfind.find(2) == Unionfind.find(4));
Unionfind.union(1 , 4);
console.log("third union " , Unionfind.parent);
console.log("Parents of 1 and 4 are same : " , Unionfind.find(1) == Unionfind.find(4));
// [LOG]: "first union ",  [0, 1, 3, 3, 4] 
// [LOG]: "second union ",  [0, 1, 3, 4, 4] 
// [LOG]: "Parents of 2 and 4 are same : ",  true 
// [LOG]: "third union ",  [0, 4, 4, 4, 4] 
// [LOG]: "Parents of 1 and 4 are same : ",  true 