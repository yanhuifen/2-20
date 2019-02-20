define(function() {
    function fn() {
        console.log(function a() {
            回调函数
        })
    }
    return fn;
})