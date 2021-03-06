if(Meteor.isClient) {
    var dim = 40;
    var bugz = [];

    var width = $(window).width() * 0.75;
    var height = $(window).height() * 0.6;

    var horiz_spacing = width / 8;
    var vert_spacing = (height / 4);

    var graphics = ["apple", "greenapple", "corn"]
    
    for( var i = 0; i < 8; i++ ) {
        for( var j = 0; j < 4; j++ ) {
            var graphic = graphics[Math.floor(Math.random()*3)];
            bugz.push({x: i*horiz_spacing, y: j*vert_spacing, width: dim, height: dim, graphic: graphic});
        }
    }
    Template.swarm.bugz = bugz;
    Template.swarm.graphicIs = function (graphic) {
      return this.graphic === graphic;
    };
    
    window.setInterval(function () {
        $swarm = $('#swarm');
        var x = $swarm.attr('data-position-x'),
            y = $swarm.attr('data-position-y');
        
        if ($swarm.attr('data-direction') == "left") {
            x--;
        } else {
            x++;
        }
        if (x%20 === 0)
            y++;
        
        if ($swarm.attr('data-position-x') == 200) {
            $swarm.attr('data-direction', 'left');
        } else if ($swarm.attr('data-position-x') <= 0) {
            $swarm.attr('data-direction', 'right');
        }

        $swarm.attr('transform', 'translate(' + x + ', ' + y + ')');
        $swarm.attr('data-position-x', x);
        $swarm.attr('data-position-y', y);
    }, 70);
}

