function fnOnload() {
    var now = new Date();

    var i = now.getFullYear();
    var startYear = i;
    var birthYear;

    while (i >= startYear - 90) {
        var attrCode = "";
        if (i===1970) attrCode = "selected";
        birthYear += "<option " + attrCode + ">" + i + "</option>";

        i--;
    }

    document.querySelector(".birthYear").innerHTML = birthYear;

    var j = 1;
    var birthMonth = "<option> 월 </option>";

    while (j <= 12) {
        birthMonth += "<option>" + j + "</option>";
        j++;
    }

    document.querySelector(".birthMonth").innerHTML = birthMonth;

    var k = 1;
    var birthDate = "<option> 일 </option>";

    while (k <= 31) {
        birthDate += "<option>" + k + "</option>";
        k++;
    }

    document.querySelector(".birthDate").innerHTML = birthDate;
}

// 회원가입 양식 확인
var userId = document.querySelector("#userID");
var pw1 = document.querySelector("#userPW")
var pw2 = document.querySelector("#reUserPW")

userId.onchange = checkId;
pw1.onchange = checkpw;
pw2.onchange = comparePw;

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.querySelector();
    }
}

function checkpw() {
    if (pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw() {
    if(pw1.value != pw2.value) {
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
    }
}

var totalagree = document.querySelector("#totalagree");
var chk1 = document.querySelector("#chk1");
var chk2 = document.querySelector("#chk2");
var chk3 = document.querySelector("#chk3");
var chk4 = document.querySelector("#chk4");

totalagree.addEventListener("click", function(){
    var chkTF;
    chkTF = totalagree.checked;
    
    chk1.checked = chkTF;
    chk2.checked = chkTF;
    chk3.checked = chkTF;
    chk4.checked = chkTF;
});

function eachChk() {

    if (chk1.checked && chk2.checked && chk3.checked && chk4.checked) {
        totalagree.checked = true;
    } else {
        totalagree.checked = false;
    }
}
    

// form 유효성 검사

var joinBtn = document.querySelector("#joinBtn");

joinBtn.addEventListener("click", function(){
    var uName = document.querySelector("#userName").value;
    var uId = document.querySelector("#userID").value;
    var uPw = document.querySelector("#userPW").value;
    var uEmail = document.querySelector("#userEmail").value;
    var age14ChkYN = document.querySelector("#chkage14").checked;
    var termsChkYN = document.querySelector("#totalagree").checked;

    if (uName === "") {
        alert("이름은 필수입니다. \n(이름을 입력해주세요)");
        document.querySelector("#userName").focus();
    } else if (uId === "") {
        alert("아이디는 필수입니다.\n(아이디를 입력해주세요)");
        document.querySelector("#userID").focus();
    } else if (uPw === "") {
        alert("비밀번호는 필수입니다.\n(비밀번호를 입력해주세요)");
        document.querySelector("#userPW").focus();
    } else if (uEmail === "") {
        alert("이메일은 필수입니다.\n(이메일을 입력해주세요)");
        document.querySelector("#userEmail").focus();
    }else if (age14ChkYN === false) {
        var msg = "14세 미만은 가입하실 수 없습니다.\n"+
                        "14이상을 체크하셔야 합니다.";
        alert(msg);
        document.querySelector("#chkage14").focus();
        document.querySelector("#chkage14").style.outline = "2px solid #f00";
    } else if (termsChkYN === false) {
        var msg = "약관 및 정보이용 동의가 필요합니다.";
        alert(msg);
        document.querySelector("#totalagree").focus();
        document.querySelector("#totalagree").style.outline = "2px solid #f00";
    } else {
        var frmName = document.frm;
        
        frmName.method = "get";
        frmName.action = "";
        frmName.submit(); 
    }
});