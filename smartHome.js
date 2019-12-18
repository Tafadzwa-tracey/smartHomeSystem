function on_ac(_this){
  console.log('Ac pressed')
  ws.send('AC ON')
}

 function switchOn(_this){
   ws.send(_this);

 }
  function setAlarm(_this) {
    _this.style.backgroundColor = "orange";
  }
  function setEvent(_this) {
    _this.style.backgroundColor = "pink";
  }
  
  var ws;
    
    function init() {
      // Connect to Web Socket
      ws = new WebSocket("ws://localhost:9001/");
      // Set event handlers.
      ws.onopen = function() {
        output("onopen");
      };
      
      ws.onmessage = function(e) {
        // e.data contains received string.
        output("onmessage: " + e.data);
      };
      
      ws.onclose = function() {
        output("onclose");
      };
      ws.onerror = function(e) {
        output("onerror");
        console.log(e)
      };
    }
    
    function onSubmit() {
      var input = document.getElementById("input");
      // You can send message to the Web Socket using ws.send.
      ws.send(input.value);
      //output("send: " + input.value);
      //input.value = "";
      //input.focus();
    }
    
    function onCloseClick() {
      ws.close();
    }
    
    function output(str) {
      var log = document.getElementById("log");
      var escaped = str.replace(/&/, "&amp;").replace(/</, "&lt;").
        replace(/>/, "&gt;").replace(/"/, "&quot;"); // "
      log.innerHTML = escaped + "<br>" + log.innerHTML;
    }
  $(document).ready(function(){
    $('.btn').click(function(){
      $('.btn').removeClass('active').addClass('inactive');
       $(this).removeClass('inactive').addClass('active');
      });
  })
  $(document).ready(function(){
    $('.onBtn').click(function(){
      ws.send('AC on')
      });
  })
  $(document).ready(function(){
    $('.offBtn').click(function(){
      ws.send('AC off')
      function onSubmit() {
        var input = document.getElementById("input");
        ws.send("Alarm set" + input.value);
      }
      
      });
  })
  
  $(document).ready(function(){
    $('.btn1').click(function(){
      $('.btn1').removeClass('active').addClass('inactive');
       $(this).removeClass('inactive').addClass('active');
      });
  })
  $(document).ready(function(){
    $('.lightOn').click(function(){
      ws.send('lights on')
      });
  })
  $(document).ready(function(){
    $('.lightOff').click(function(){
      ws.send('lights off')
      });
  })
  $(document).ready(function(){
    $('.btn2').click(function(){
      $('.btn2').removeClass('active').addClass('inactive');
       $(this).removeClass('inactive').addClass('active');
      });
  })
  $(document).ready(function(){
    $('.floorOn').click(function(){
      ws.send('Floor mopping robot on')
      });
  })
  $(document).ready(function(){
    $('.floorOff').click(function(){
      ws.send('Floor mopping robot off')
      });
  })
  
  $(document).ready(function(){
    $('.btn3').click(function(){
      $('.btn3').removeClass('active').addClass('inactive');
       $(this).removeClass('inactive').addClass('active');
      });
  })
 

  $(document).ready(function(){
    $('.onAlarm').click(function(){
      ws.send('Alarm on')
      });
  })

  
  $(document).ready(function(){
    $('.offAlarm').click(function(){
      ws.send('Alarm off')
      });
  })
