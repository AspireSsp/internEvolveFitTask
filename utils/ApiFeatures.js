class ApiFeatures {
    constructor(query,queryStr){
        this.query = query,
        this.queryStr = queryStr
    }

    filter(){
        const queryCopy = {...this.queryStr}

        //    Removing some fields for calory
        const removeFields = ["keyword","page","limit"];

        removeFields.forEach(key=>delete queryCopy[key]);

        //   filter for calory and protein
        let queryStr = JSON.stringify(queryCopy);
        if(queryCopy.calories){
            queryStr = {
                //  set min and max value for calory
                calories : {
                    $gte: Number(queryCopy.calories)-100,
                    $lte: Number(queryCopy.calories) + 100,
                },
                //  set protien value according to 20-30% of calories value
                protein: {
                    $gte: (Number(queryCopy.calories)*20)/100,
                    $lte: (Number(queryCopy.calories)*30)/100,
                }
            }
        }else{
            queryStr = {}
        }
        let newQueryStr = JSON.stringify(queryStr);
        console.log(newQueryStr);

        this.query = this.query.find(JSON.parse(newQueryStr));
        // console.log(queryStr);
        return this;
    }

    //  to get limited items as mentioned 2-5
    differentItem(numOfDiffItems){
        this.query = this.query.limit(numOfDiffItems)
        return this;
    }

}
module.exports = ApiFeatures;   