(function () {
function BinManager() {
    var self = this;
    var bins = document.getElementsByClassName('bin');

    self.modifyBins = function modifyBins() {

        var binLen = bins.length;
        var binType;
        var binId;
        var binState;
        for (var i = 0; i < binLen; i++) {
            binId = bins[i].id.toString();
            binType = binId.substring(0, binId.indexOf('-'));
            binState = binId.substring(binId.lastIndexOf('-') + 1);
            if (binState === 'open') {
                
                switch (binType) {
                    case 'glass':
                        attachEventHandler(bins[i], 'drop', onDropThrowGlassTrash);
                        break;
                    case 'paper':
                        attachEventHandler(bins[i], 'drop', onDropThrowPaperTrash);
                        break;
                    case 'plastic':
                        attachEventHandler(bins[i], 'drop', onDropThrowMetalOrPlasticTrash);
                        break;
                    default:
                        throw new Error('Unexpected type of trash.' + binType);

                }

                attachEventHandler(bins[i], 'dragleave', closeBin);
                attachEventHandler(bins[i], 'dragover', allowDrop);
                bins[i].style.display = 'none';
            }
            else {

                attachEventHandler(bins[i], 'dragover', openBin);
            }
            }
           
    };
   
    return self;
}
binManager = new BinManager();
}).call(this);