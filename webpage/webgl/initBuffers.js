var VertexPositionBuffer;
var VertexTextureCoordBuffer;
var VertexNormalBuffer;

var VertexPositionBuffer2;
var VertexTextureCoordBuffer2;
var VertexIndexBuffer2;
var VertexNormalBuffer2;

var VertexPositionBuffer3;
var VertexTextureCoordBuffer3;
var VertexIndexBuffer3;
var VertexNormalBuffer3;

function handleLoadedObject(objectData) {

    VertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexTextureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.mTextureCoords), gl.STATIC_DRAW);
    VertexTextureCoordBuffer.itemSize = 2;
    VertexTextureCoordBuffer.numItems = objectData.mTextureCoords.length / 2;

    VertexNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.mVertexNormals), gl.STATIC_DRAW);
    VertexNormalBuffer.itemSize = 3;
    VertexNormalBuffer.numItems = objectData.mVertexNormals.length / 3;

    VertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.mVertexPoints), gl.STATIC_DRAW);
    VertexPositionBuffer.itemSize = 3;
    VertexPositionBuffer.numItems = objectData.mVertexPoints.length / 3;

}

function handleLoadedObject2(objectData) {

    VertexTextureCoordBuffer2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexTextureCoordBuffer2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.texcoords), gl.STATIC_DRAW);
    VertexTextureCoordBuffer2.itemSize = 2;
    VertexTextureCoordBuffer2.numItems = objectData.texcoords.length / 2;

    VertexNormalBuffer2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexNormalBuffer2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.normals), gl.STATIC_DRAW);
    VertexNormalBuffer2.itemSize = 3;
    VertexNormalBuffer2.numItems = objectData.normals.length / 3;

    VertexPositionBuffer2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexPositionBuffer2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.verts), gl.STATIC_DRAW);
    VertexPositionBuffer2.itemSize = 3;
    VertexPositionBuffer2.numItems = objectData.verts.length / 3;

    VertexIndexBuffer2 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, VertexIndexBuffer2);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(objectData.indices), gl.STATIC_DRAW);
    VertexIndexBuffer2.itemSize = 1;
    VertexIndexBuffer2.numItems = objectData.indices.length;

}

function handleLoadedObject3(objectData) {

    VertexTextureCoordBuffer3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexTextureCoordBuffer3);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.texcoords), gl.STATIC_DRAW);
    VertexTextureCoordBuffer3.itemSize = 2;
    VertexTextureCoordBuffer3.numItems = objectData.texcoords.length / 2;

    VertexNormalBuffer3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexNormalBuffer3);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.normals), gl.STATIC_DRAW);
    VertexNormalBuffer3.itemSize = 3;
    VertexNormalBuffer3.numItems = objectData.normals.length / 3;

    VertexPositionBuffer3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VertexPositionBuffer3);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectData.verts), gl.STATIC_DRAW);
    VertexPositionBuffer3.itemSize = 3;
    VertexPositionBuffer3.numItems = objectData.verts.length / 3;

    VertexIndexBuffer3 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, VertexIndexBuffer3);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(objectData.indices), gl.STATIC_DRAW);
    VertexIndexBuffer3.itemSize = 1;
    VertexIndexBuffer3.numItems = objectData.indices.length;

}


function loadObject() {
    var request = new XMLHttpRequest();
    request.open("GET", "objects/stone_2.json"); <!-- vilket objekt man vill läsa in -->
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            handleLoadedObject(JSON.parse(request.responseText));
        }
    }
    request.send();
}

function loadObject2() {
    var request = new XMLHttpRequest();
    request.open("GET", "objects/bana.json"); <!-- vilket objekt man vill läsa in -->
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            handleLoadedObject2(JSON.parse(request.responseText));
        }
    }
    request.send();
}

function loadObject3() {
    var request = new XMLHttpRequest();
    request.open("GET", "objects/skybox.json"); <!-- vilket objekt man vill läsa in -->
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            handleLoadedObject3(JSON.parse(request.responseText));
        }
    }
    request.send();
}