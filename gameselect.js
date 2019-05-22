var yearSelection = "<input type=\"text\" value=\"\" class=\"mdl-textfield__input\" id=\"category\" readonly onchange=\"setCategory(value)\">\n"+
"    <input type=\"hidden\" value=\"\" name=\"category\">\n"+
"    <i class=\"mdl-icon-toggle__label material-icons\">keyboard_arrow_down</i>\n"+
"    <label for=\"category\" class=\"mdl-textfield__label\">Category</label>\n"+
"    <ul for=\"category\" class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu\">\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1927\">1927</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1928\">1928</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1929\">1929</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1930\">1930</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1931\">1931</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1932\">1932</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1933\">1933</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1934\">1934</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1935\">1935</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1936\">1936</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1937\">1937</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1938\">1938</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1939\">1939</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1940\">1940</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1941\">1941</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1942\">1942</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1943\">1943</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1944\">1944</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1945\">1945</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1946\">1946</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1947\">1947</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1948\">1948</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1949\">1949</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1950\">1950</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1951\">1951</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1952\">1952</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1953\">1953</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1954\">1954</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1955\">1955</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1956\">1956</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1957\">1957</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1958\">1958</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1959\">1959</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1960\">1960</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1961\">1961</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1962\">1962</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1963\">1963</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1964\">1964</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1965\">1965</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1966\">1966</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1967\">1967</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1968\">1968</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1969\">1969</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1970\">1970</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1971\">1971</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1972\">1972</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1973\">1973</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1974\">1974</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1975\">1975</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1976\">1976</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1977\">1977</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1978\">1978</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1979\">1979</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1980\">1980</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1981\">1981</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1982\">1982</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1983\">1983</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1984\">1984</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1985\">1985</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1986\">1986</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1987\">1987</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1988\">1988</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1989\">1989</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1990\">1990</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1991\">1991</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1992\">1992</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1993\">1993</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1994\">1994</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1995\">1995</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1996\">1996</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1997\">1997</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1998\">1998</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"1999\">1999</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2000\">2000</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2001\">2001</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2002\">2002</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2003\">2003</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2004\">2004</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2005\">2005</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2006\">2006</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2007\">2007</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2008\">2008</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2009\">2009</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2010\">2010</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2011\">2011</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2012\">2012</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2013\">2013</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2014\">2014</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2015\">2015</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2016\">2016</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2017\">2017</li>\n"+
"        <li class=\"mdl-menu__item\" data-val=\"2018\">2018</li>\n"+
"    </ul>";

function setType(type){
    switch(type){
        case "year":
            document.getElementById("category_select").innerHTML=yearSelection;
            getmdlSelect.init(".getmdl-select")
            componentHandler.upgradeDom();
            break;
    }
}

function setCategory(category){
    if(category == "Please select type first"){
        return;
    }
    localStorage.setItem("category", category);
    console.log(category);
    document.getElementById("setup_button").disabled = false;
}

function loadScreen(){
    document.getElementById("setup_button").disabled = true;
}

window.onload = loadScreen;