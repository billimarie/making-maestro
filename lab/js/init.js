function init() {
	var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="index.html">Video Object with Text and Reflection</a>' + '&nbsp;|&nbsp;' + '<a href="videocubematerial.html">Video Cube Material</a>' + '&nbsp;|&nbsp;' + '<a href="videocubetext.html">Video Cube with Text</a>' + '&nbsp;|&nbsp;' + '<a href="differentvideoscube.html">Different Videos as Faces on Cube</a>' + '&nbsp;|&nbsp;' + '<a href="multivideoscubewithnav.html">Multiple Videos Cube with Navigation</a>';
        container.appendChild( info );
}