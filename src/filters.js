import Vue from 'vue'

Vue.filter('reverse' , function(value) {
    return value.slice().reverse();
})

Vue.filter('capitalize' , function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}) 


Vue.filter('itemRemove' , function(items,item){
    let index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }
    return items;
})

Vue.filter('itemUpdate', function(items,item){
    let index = items.indexOf(item);
    if (index > -1) {
        for(let i=0; i < item.length; i++ ){
            items[index][i] = item[i];
        }
    }
    return items;
})


