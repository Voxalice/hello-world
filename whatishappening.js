const icon = "";

class SBlox {

  constructor() {}

  getInfo() {
    return {
      id: 'sblox',
      name: 'SBlox',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'fetchThis',

          blockType: Scratch.BlockType.REPORTER,

          text: 'fetch content of URL [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'getToJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[t] of JSON [e]',
          arguments: {
            t: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'version/checksum'
            },
            e: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"version": {"checksum": "hash", "version_of_project": 26.9}, "precise_version": "26.9.8194.103"}'
            }
          }
        },
        
       {
         opcode: 'runJS',
         
         blockType: Scratch.BlockType.STACK,
         
         text: 'run JS anonymous function [a]'
         arguments: {
           a: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: 'alert("Hello World!");'
           }
         }
        }
        
        }
      ]
    }
  }
  
  fetchThis({URL}) {
    return fetch(URL).then(res=>res.text()).catch(err => 'error');
  }

  getToJSON({t,e}){
    try{const n=t.toString().split("/").map(t=>decodeURIComponent(t));let r;""===n[0]&&n.splice(0,1),""===n[n.length-1]&&n.splice(-1,1);try{r=JSON.parse(" "+e)}catch(t){return t.message}return n.forEach(t=>r=r[t]),null===r?"null":void 0===r?"":"object"==typeof r?JSON.stringify(r):r.toString()}catch(t){return""}
  }
  
  runJS({a}){
    running=Function(a); running();
  }

}

Scratch.extensions.register(new SBlox());
