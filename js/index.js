// Put your three.js codes below
(function() {

    // Prepare stage scene
    const scene = new THREE.Scene();

    // Add actors of this scene
   const objLoader=new THREE.OBJLoader();

    objLoader.load('model/test.obj',function(object){
      scene.add(object);
    });

    
    // Ground

    // Add camera
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set( 1500, 1500, 1500 );
    camera.lookAt( scene.position ); 
    const navTool = new THREE.OrbitControls( camera ); 
    navTool.enableDamping = true;
    navTool.dampingFactor = 0.25;
    navTool.enableZoom=true;

    // Set up stage light
    const pointLight1 = new THREE.PointLight( 0xdaa520, 1, 0 );
    pointLight1.castShadow = true;
    pointLight1.position.set(2500, 2500, 2500);
    scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xdaa520c, 1, 0 );
    pointLight2.castShadow = true;
    pointLight2.position.set(-2500, -2500, -2500);
    scene.add( pointLight2 );

  
    // Set up renderer
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff, 1.0 );
    document.body.appendChild( renderer.domElement );
  
    // Start rendering.
    function render() {
      navTool.update();
      requestAnimationFrame( render );
      renderer.render( scene, camera );
    }
  
    render();

    window.addEventListener( 'resize', function() {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );
    });

    const animateBtn = document.getElementById('animate');

})();