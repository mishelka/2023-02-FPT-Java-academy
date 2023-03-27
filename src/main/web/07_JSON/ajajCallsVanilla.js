/**
 * Created by stefan.kr
 */

/**
 * Vykona XMLHttpRequest GET ziadost a spracuje odpoved v podobe objektu ziskaneho z odpovede v JSON formate.
 * Tato verzia je funkcna aj pre starsie prehliadace (IE 5, 6)
 * (povodny kod prevzaty z: https://mathiasbynens.be/notes/xhr-responsetype-json).
 * @param url - URL ziadosti
 * @param successHandler - funkcia, ktora spracuje objekt data, ziskany z odpovede v JSON formate. Tento objekt by mal byt parametrom funkcie
 * @param errorHandler - funkcia, ktora sa vola, ked dojde k chybe. Jej parametrom by malo byt cislo so statusom odpovede
 */
function getJSONAllBr(url, successHandler, errorHandler){


    var xhr = typeof XMLHttpRequest != 'undefined'
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() { //alternativne mozem pouzit xhr.addEventListener("readystatechange",funkcia, false),
        // ale tu je pouzita anonymna funkcia a bolo by to iba neprehladnejsie
        var status;
        var data;
        if (xhr.readyState === 4) { // DONE, alternativne sa da pouzit XMLHttpRequest.DONE
            status = xhr.status;
            if (status === 200) { //uspesne vybavena poziadavka
                data = JSON.parse(xhr.responseText);
                successHandler && successHandler(data);
            } else {
                errorHandler && errorHandler(status);
            }
        }
    };
    xhr.send();

};

/**
 * Vykona XMLHttpRequest GET ziadost a spracuje odpoved v podobe objektu ziskaneho z odpovede v JSON formate.
 * Tato verzia je funkcna pre novsie prehliadace, ktore poznaju hodnotu "json" pre XMLHttpRequest.responseType
 * (povodny kod prevzaty z: https://mathiasbynens.be/notes/xhr-responsetype-json).
 * @param url - URL ziadosti
 * @param successHandler - funkcia, ktora spracuje objekt data, ziskany z odpovede v JSON formate. Tento objekt by mal byt parametrom funkcie
 * @param errorHandler - funkcia, ktora sa vola, ked dojde k chybe. Jej parametrom by malo byt cislo so statusom odpovede
 */
function getJSONModernBr(url, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            successHandler && successHandler(xhr.response);
        } else {
            errorHandler && errorHandler(status);
        }
    };
    xhr.send();
};


/**
 * Vykona XMLHttpRequest GET ziadost a spracuje odpoved v podobe retazca (typ DOMString).
 * Tato verzia je funkcna aj pre starsie prehliadace (IE 5, 6)
 * Je to vlastne funkcia getJSONAllBr bez spracovania odpovede z JSON retazca na JavaScript objekt a s pridanym idElm
 * @param url - URL ziadosti
 * @param paramObj - objekt s dalsimi parametrami pre handler-y
 * @param successHandler - funkcia, ktora spracuje retazec, ziskany z odpovede, do elementu s id=idElm. Tento objekt by mal byt parametrom funkcie
 * @param errorHandler - funkcia, ktora sa vola, ked dojde k chybe. Jej parametrom by malo byt cislo so statusom odpovede a element s id=idElm
 */
function getTextFromUrl(url, paramObj, successHandler, errorHandler){
        var xhr = typeof XMLHttpRequest != 'undefined'
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() { //alternativne mozem pouzit xhr.addEventListener("readystatechange",funkcia, false),
            // ale tu je pouzita anonymna funkcia a bolo by to iba neprehladnejsie
            var status;
            var data;
            if (xhr.readyState === 4) { // DONE, alternativne sa da pouzit XMLHttpRequest.DONE
                status = xhr.status;
                if (status === 200) { //uspesne vybavena poziadavka
                    successHandler && successHandler(xhr.responseText,paramObj);
                } else {
                    errorHandler && errorHandler(status,paramObj);
                }
            }
        };
        xhr.send();


};
