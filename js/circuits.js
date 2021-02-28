function loadKoder() {
    myDiagram.model = go.Model.fromJson(`{ "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"category":"input", "key":-1, "loc":"-260 -420"},
{"category":"input", "key":-2, "loc":"-190 -420"},
{"category":"input", "key":-3, "loc":"-120 -420"},
{"category":"input", "key":-4, "loc":"-50 -420"},
{"category":"output", "key":-10, "loc":"250 -280"},
{"category":"output", "key":-11, "loc":"250 -220"},
{"category":"or", "key":-7, "loc":"40 -320"},
{"category":"or", "key":-8, "loc":"40 -260"}
 ],
  "linkDataArray": [ 
{"from":-2, "to":-7, "fromPort":"", "toPort":"in1"},
{"from":-3, "to":-8, "fromPort":"", "toPort":"in1"},
{"from":-4, "to":-7, "fromPort":"", "toPort":"in2"},
{"from":-4, "to":-8, "fromPort":"", "toPort":"in2"},
{"from":-7, "to":-10, "fromPort":"out", "toPort":""},
{"from":-8, "to":-11, "fromPort":"out", "toPort":""}
 ]}`);

    save();
}

function loadDekoder() {
    myDiagram.model = go.Model.fromJson(`{ "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"category":"output", "key":-2, "loc":"190 -350"},
{"category":"output", "key":-3, "loc":"190 -290"},
{"category":"output", "key":-4, "loc":"190 -230"},
{"category":"output", "key":-5, "loc":"190 -170"},
{"category":"input", "key":-1, "loc":"-270 -360"},
{"category":"input", "key":-6, "loc":"-270 -300"},
{"category":"not", "key":-7, "loc":"-150 -360"},
{"category":"not", "key":-8, "loc":"-150 -300"},
{"category":"and", "key":-9, "loc":"-30 -350"},
{"category":"and", "key":-10, "loc":"-30 -290"},
{"category":"and", "key":-11, "loc":"-30 -230"},
{"category":"and", "key":-12, "loc":"-30 -170"}
 ],
  "linkDataArray": [ 
{"from":-6, "to":-8, "fromPort":"", "toPort":"in"},
{"from":-1, "to":-7, "fromPort":"", "toPort":"in"},
{"from":-12, "to":-5, "fromPort":"out", "toPort":""},
{"from":-11, "to":-4, "fromPort":"out", "toPort":""},
{"from":-10, "to":-3, "fromPort":"out", "toPort":""},
{"from":-9, "to":-2, "fromPort":"out", "toPort":""},
{"from":-7, "to":-9, "fromPort":"out", "toPort":"in1"},
{"from":-8, "to":-9, "fromPort":"out", "toPort":"in2"},
{"from":-8, "to":-10, "fromPort":"out", "toPort":"in2"},
{"from":-1, "to":-12, "fromPort":"", "toPort":"in2"},
{"from":-6, "to":-12, "fromPort":"", "toPort":"in1"},
{"from":-6, "to":-11, "fromPort":"", "toPort":"in1"},
{"from":-7, "to":-11, "fromPort":"out", "toPort":"in2"},
{"from":-1, "to":-10, "fromPort":"", "toPort":"in1"}
 ]}`);

    save();
}

function loadMultiplekser() {
    myDiagram.model = go.Model.fromJson(`{ "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"category":"input", "key":-1, "loc":"-330 -380"},
{"category":"input", "key":-2, "loc":"-270 -380"},
{"category":"input", "key":-3, "loc":"-210 -380"},
{"category":"input", "key":-4, "loc":"-150 -380"},
{"category":"input", "key":-5, "loc":"-90 -380"},
{"category":"input", "key":-6, "loc":"0 -380"},
{"category":"not", "key":-7, "loc":"70 -310"},
{"category":"not", "key":-8, "loc":"-20 -310"},
{"category":"nand", "key":-9, "loc":"150 -220"},
{"category":"nand", "key":-10, "loc":"150 -150"},
{"category":"nand", "key":-11, "loc":"150 -80"},
{"category":"nand", "key":-12, "loc":"150 -20"},
{"category":"nand", "key":-13, "loc":"220 -180"},
{"category":"nand", "key":-14, "loc":"220 -50"},
{"category":"nand", "key":-15, "loc":"290 -50"},
{"category":"nand", "key":-16, "loc":"290 -160"},
{"category":"nand", "key":-17, "loc":"360 -100"},
{"category":"output", "key":-18, "loc":"430 -100"}
 ],
  "linkDataArray": [ 
{"from":-6, "to":-7, "fromPort":"", "toPort":"in"},
{"from":-5, "to":-8, "fromPort":"", "toPort":"in"},
{"from":-7, "to":-16, "fromPort":"out", "toPort":"in2"},
{"from":-16, "to":-17, "fromPort":"out", "toPort":"in1"},
{"from":-15, "to":-17, "fromPort":"out", "toPort":"in2"},
{"from":-9, "to":-13, "fromPort":"out", "toPort":"in1"},
{"from":-10, "to":-13, "fromPort":"out", "toPort":"in2"},
{"from":-13, "to":-16, "fromPort":"out", "toPort":"in1"},
{"from":-8, "to":-11, "fromPort":"out", "toPort":"in1"},
{"from":-6, "to":-15, "fromPort":"", "toPort":"in2"},
{"from":-5, "to":-12, "fromPort":"", "toPort":"in1"},
{"from":-5, "to":-10, "fromPort":"", "toPort":"in1"},
{"from":-8, "to":-9, "fromPort":"out", "toPort":"in1"},
{"from":-17, "to":-18, "fromPort":"out", "toPort":""},
{"from":-1, "to":-9, "fromPort":"", "toPort":"in2"},
{"from":-2, "to":-10, "fromPort":"", "toPort":"in2"},
{"from":-3, "to":-11, "fromPort":"", "toPort":"in2"},
{"from":-4, "to":-12, "fromPort":"", "toPort":"in2"},
{"from":-12, "to":-14, "fromPort":"out", "toPort":"in2"},
{"from":-11, "to":-14, "fromPort":"out", "toPort":"in1"},
{"from":-14, "to":-15, "fromPort":"out", "toPort":"in1"}
 ]}`);

    save();
}

function loadSumator() {
    myDiagram.model = go.Model.fromJson(`{ "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"category":"input", "key":-1, "loc":"-260 -410"},
{"category":"input", "key":-2, "loc":"-260 -350"},
{"category":"input", "key":-3, "loc":"-260 -290"},
{"category":"output", "key":-4, "loc":"170 -250"},
{"category":"output", "key":-5, "loc":"170 -360"},
{"category":"xor", "key":-6, "loc":"-130 -400"},
{"category":"xor", "key":-7, "loc":"-40 -360"},
{"category":"or", "key":-8, "loc":"60 -250"},
{"category":"and", "key":-9, "loc":"-30 -280"},
{"category":"and", "key":-10, "loc":"-30 -220"}
 ],
  "linkDataArray": [ 
{"from":-10, "to":-8, "fromPort":"out", "toPort":"in2"},
{"from":-9, "to":-8, "fromPort":"out", "toPort":"in1"},
{"from":-8, "to":-4, "fromPort":"out", "toPort":""},
{"from":-1, "to":-6, "fromPort":"", "toPort":"in1"},
{"from":-7, "to":-5, "fromPort":"out", "toPort":""},
{"from":-6, "to":-7, "fromPort":"out", "toPort":"in1"},
{"from":-6, "to":-9, "fromPort":"out", "toPort":"in2"},
{"from":-3, "to":-7, "fromPort":"", "toPort":"in2"},
{"from":-3, "to":-9, "fromPort":"", "toPort":"in1"},
{"from":-2, "to":-6, "fromPort":"", "toPort":"in2"},
{"from":-2, "to":-10, "fromPort":"", "toPort":"in1"},
{"from":-1, "to":-10, "fromPort":"", "toPort":"in2"}
 ]}`);

    save();
}

function loadPrzerzutnik() {
    myDiagram.model = go.Model.fromJson(`{ "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"category":"nand", "key":-7, "loc":"-170 -200"},
{"category":"nand", "key":-2, "loc":"-170 -290"},
{"category":"output", "key":-3, "loc":"-40 -290"},
{"category":"output", "key":-4, "loc":"-40 -200"},
{"category":"input", "key":-1, "loc":"-310 -280"},
{"category":"input", "key":-6, "loc":"-310 -210"}
 ],
  "linkDataArray": [ 
{"from":-2, "to":-7, "fromPort":"out", "toPort":"in1"},
{"from":-7, "to":-2, "fromPort":"out", "toPort":"in2"},
{"from":-2, "to":-3, "fromPort":"out", "toPort":""},
{"from":-7, "to":-4, "fromPort":"out", "toPort":""},
{"from":-1, "to":-2, "fromPort":"", "toPort":"in1"},
{"from":-6, "to":-7, "fromPort":"", "toPort":"in2"}
 ]}`);

    save();
}