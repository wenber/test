(function($) {
    $.fn.button = function(options) {
        var $this = this;
        
        //设置是否可用状态的函数
        var ableMethods={
            setEnable:function(){
                $this.attr('class', $this.dat   a('states')['out']);
                $this.data('isAvailable',true);
                bindHoverEvent();
            },
            setDisable:function(){
                $this.attr('class', $this.data('states')['disabled']);
                $this.data('isAvailable',false);
                unbindHoverEvent();
            }
        };
        
        if(ableMethods[options]){
            ableMethods[options].apply(this);
        }
        else if( typeof options === 'object'){
            init(options);
        }
        else{
            console.log('illegal parameter');
        }

        function init(options) {
            $this.text(options.text||'');
            $this.data({states:options.states,isAvailable:true});
            bindHoverEvent();
        }

        function bindHoverEvent() {
            $this.bind('mouseover', function() {
                $this.attr('class', $this.data('states')['in']);
            });
            $this.bind('mouseout', function() {
                $this.attr('class', $this.data('states')['out']);
            });
        }
        
        function unbindHoverEvent() {
            $this.unbind('mouseover');
            $this.unbind('mouseout');
        }
        return this;
    }
})(jQuery);