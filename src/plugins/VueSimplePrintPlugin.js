const VueSimplePrintPlugin = {};

VueSimplePrintPlugin.install = function (Vue) {
  let printSection = null;
  const sectionToPrintId = 'vueSimplePrintSection';

  const addPrintableSection = () => {
    printSection = document.createElement('div');
    printSection.id = sectionToPrintId;
    document.body.appendChild(printSection);
  };

  const addStyles = () => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`
        @media screen {
            #vueSimplePrintSection {
                display: none;
            }
        }
        @media print {
            body * {
                visibility:hidden;
            }
            #vueSimplePrintSection, #vueSimplePrintSection * {
                visibility:visible;
            }
            #vueSimplePrintSection {
                position:absolute;
                left:0;
                top:0;
            }
        }
      `));
    document.body.appendChild(style);
  };

  const startConfig = () => {
    addPrintableSection();
    addStyles();
    window.onafterprint = () => {
      printSection.innerHTML = '';
    };
  };

  const printElement = (elem) => {
    const domClone = elem.cloneNode(true);
    printSection.appendChild(domClone);
    window.print();
  }

  const onDirectiveClick = (el, paramId) => () =>{
    const elemToPrint = document.getElementById(paramId);
    if (elemToPrint) {
      printSection.innerHTML = '';
      printElement(elemToPrint);
    }
  };

  Vue.directive('simple-print', {
    bind (el, binding) {
      printSection = document.getElementById(sectionToPrintId);
      if(!printSection) {
        startConfig();
      }
      el.addEventListener('click', onDirectiveClick(el, binding.value));
    },
    unbind(el, binding) {
      el.removeEventListener('click', onDirectiveClick(el, binding.value))
    }
  })
};
export default VueSimplePrintPlugin;
