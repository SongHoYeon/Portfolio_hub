window.onload = () => {
    init();
}
window.onunload = () => {
    destory();
}

function init () {
    userInit();
    buttonInit();
}

function buttonInit () {
    navigationInit();
    document.getElementById('wycn_btn_close').addEventListener('click', () => {
        findParentBySelector(document.getElementById('wycn_btn_close'), ".wyc_notice").style.display = 'none';
    });
}

function navigationInit () {
    document.getElementById('wy_btn_menu').addEventListener('click', sideMenuClickHandler);

    let menuItems = document.querySelectorAll('.wyn_list>a');
    Array.from(menuItems).forEach( (item) => {
        item.addEventListener('click', sideMenuItemClickHandler);
    });
}

function sideMenuClickHandler (t) {
    let sideNavigation = document.getElementById('wy_navigation');
    let menuBtn = document.getElementById('wy_btn_menu');
    let condition = (menuBtn.getAttribute('aria-expanded') ==='true');

    sideNavigation.classList.toggle('wyn_show');
    if (menuBtn.getAttribute('aria-expanded') ==='true') {
        menuBtn.setAttribute('aria-expanded', 'false') ;
    }
    else {
        menuBtn.setAttribute('aria-expanded', 'true') 
    }
}

function sideMenuItemClickHandler () {
    resetAllMenuItemCondition(); 
    this.setAttribute('aria-selected', 'true');
}

function resetAllMenuItemCondition () {
    let menuItems = document.querySelectorAll('.wyn_list>a');
    Array.from(menuItems).forEach( (item) => {
        item.setAttribute('aria-selected', 'false');
    });
}

function userInit () {
    const mock_name = "호연";
    let nameLabel = document.getElementById('account_name');

    nameLabel.innerHTML = mock_name;
}

function destory () {
    deleteEventListener();
}

function deleteEventListener () {
    document.getElementById('wy_btn_menu').removeEventListener('click', sideMenuClickHandler);
}

function findParentBySelector(elm, selector) {
    const all = document.querySelectorAll(selector);
    let cur = elm.parentElement;

    while(Array.from(all).filter((e) => {
        return e == cur;
    }).length == 0) {
        cur = cur.parentElement
    }
    return cur;
}