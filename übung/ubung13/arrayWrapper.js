function arrayWrapper() {
    var array; // private
    return {
        get:function(pos){
            return array[pos];
        },
        set:function(pos,value){
            array[pos] = value;
        },
        append:function(value){
            array.push(value);
        }
    }
}
/*
    Ursachenanalyse:
    Die Parameter von functionen sind nicht geprüft, Also sie können auch negetive werte sein.
 */

/*
    Sicherheitskonzept:
    Die parameter können für mehere spezifizität und sicherheit geprüft werden.
 */

function arrayWrappers() {
    var array; // private
    return {
        get:function(pos){
            if(pos<0){
                throw "Error";
            }else {
                return array[pos];
            }
        },
        set:function(pos,value){
            if(pos<0){
                throw "Error";
            }else {
                array[pos] = value;
            }

        },
        append:function(value){
            array.push(value);
        }
    }
}