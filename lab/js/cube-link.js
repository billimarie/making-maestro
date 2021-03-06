var container;
			var camera, scene, renderer;
			var particleMaterial;

			var raycaster;
			var mouse;

			var objects = [];

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				var info = document.createElement( 'div' );
				info.style.position = 'absolute';
				info.style.top = '10px';
				info.style.width = '100%';
				info.style.textAlign = 'center';
				info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - clickable objects';
				container.appendChild( info );

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 0, 300, 500 );

				scene = new THREE.Scene();

				var object = new THREE.Mesh( new THREE.TetrahedronGeometry( 75, 0 ), new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, opacity: 0.5 } ) );

				object.scale.x = 2 + 1;
				object.scale.y = 2 + 1;
				object.scale.z = 2 + 1;

				object.position.set(0, 0, 0);

				scene.add( object );

				objects.push( object );

				//

				var PI2 = Math.PI * 2;
				particleMaterial = new THREE.SpriteCanvasMaterial( {

					color: 0x000000,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill(); 
					}

				} );


				//
				
				raycaster = new THREE.Raycaster();
				mouse = new THREE.Vector2();

				renderer = new THREE.CanvasRenderer();
				renderer.setClearColor( );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}
			
			function onDocumentTouchStart( event ) {
				
				event.preventDefault();
				
				event.clientX = event.touches[0].clientX;
				event.clientY = event.touches[0].clientY;
				onDocumentMouseDown( event );

			}	

			function onDocumentMouseDown( event ) {

				event.preventDefault();

				mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;

				raycaster.setFromCamera( mouse, camera );

				var intersects = raycaster.intersectObjects( objects );

				if ( intersects.length > 0 ) {

					intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );

					var particle = new THREE.Sprite( particleMaterial );
					particle.position.copy( intersects[ 0 ].point );
					particle.scale.x = particle.scale.y = 16;
					scene.add( particle );

				}

				
				// Parse all the faces
				for ( var i in intersects ) {

					intersects[ i ].face.material[ 0 ].color.setHex( Math.random() * 0xffffff | 0x80000000 );

				}
				
			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			var radius = 600;
			var theta = 0;

			function render() {

				theta += 0.1;

				camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}