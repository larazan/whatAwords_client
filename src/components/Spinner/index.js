import React from 'react';

const Spinner = ({ width = 16, height = 16, bold = 4, color = 'blue', type = 'spin-one' }) => {
    const renderSpinner = () => {
        let spin = null;

        switch (type) {
            case 'spin-one':
                spin = (
                    <div style={{borderTopColor:'transparent'}} className={`w-${width} h-${height} border-${bold} border-${color}-400 border-solid rounded-full animate-spin`}></div>
                )
                break;
            case 'spin-two':
                spin = (
                    <div style={{borderTopColor:'transparent'}} className={`w-${width} h-${height} border-${bold} border-${color}-400 border-dashed rounded-full animate-spin`}></div>
                )
                break;
            case 'spin-three':
                spin = (
                    <div style={{borderTopColor:'transparent'}} className={`w-${width} h-${height} border-${bold} border-${color}-400 border-dotted rounded-full animate-spin`}></div>
                )
                break;
            case 'spin-four':
                spin = (
                    <div style={{borderTopColor:'transparent'}} className={`w-${width} h-${height} border-${bold} border-${color}-400 border-double rounded-full animate-spin`}></div>
                )
                break;
        
            default:
                spin = null;
        }

        return spin;
    }
  return (
  <>
  <div className="overflow-hidden">{renderSpinner()}</div>
    
  </>
  );
};

export default Spinner;
