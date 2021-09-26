$(document).ready(function() {
    AOS.init();

    $('#snsShareBtn').on('click', function() {
        if (confirm('다른사람에게 이 글을 추천하고 싶나요?')) {
            copyToClipboard();
        }
    });

    $('#bookingForm').submit(submitBooking);

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('#btnScrollDown').hide();
        } else {
            $('#btnScrollDown').fadeIn();
        }
    });
});

// function copyToClipboard() {
//     var copyUrl = 'http://donmmelier.com/';

//     var agent = navigator.userAgent.toLowerCase();
//     if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
//         // IE 용
//         window.clipboardData.setData("Text", copyUrl);
//     } else {
//         navigator.clipboard.writeText(copyUrl)
//             //     .then(() => {
//             //     console.log("Text copied to clipboard...")
//             // })
//             //     .catch(err => {
//             //     console.log('Something went wrong', err);
//             // })
//         ;
//     }

//     alert('링크가 복사되었습니다.');
// }

function copyToClipboard(e) {
    var tempItem = document.createElement('input');

    tempItem.setAttribute('type', 'text');
    tempItem.setAttribute('display', 'none');

    // let content = e;    
    // if (e instanceof HTMLElement) {
    //     content = e.innerHTML;
    // }

    let content = 'http://donmmelier.com/';

    tempItem.setAttribute('value', content);
    document.body.appendChild(tempItem);

    tempItem.select();
    document.execCommand('Copy');

    tempItem.parentElement.removeChild(tempItem);

    alert('링크가 복사되었습니다.');
}

function submitBooking(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!$('#formAgree').is(":checked")) {
        alert('개인정보 수집, 이용 및 SMS 수신에 동의하셔야 합니다.');
        return false;
    }

    var regName = $('#regName').val();

    var name_regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9| ]+$/;
    if (!name_regex.test(regName)) {
        alert('성함이 잘못입력되었습니다.');
        $('#regName').focus();
        return false;
    }

    var regPhone1 = $('#regPhone1').val().trim();
    var phone_regex = /^[0-9]{2,4}$/;
    if (!phone_regex.test(regPhone1)) {
        alert('연락처 첫번째 항목이 잘못되었습니다.');
        $('#regPhone1').focus();
        return false;
    }

    var regPhone2 = $('#regPhone2').val().trim();
    if (!phone_regex.test(regPhone2)) {
        alert('연락처 두번째 항목이 잘못되었습니다.');
        $('#regPhone2').focus();
        return false;
    }

    var regPhone3 = $('#regPhone3').val().trim();
    if (!phone_regex.test(regPhone3)) {
        alert('연락처 세번째 항목이 잘못되었습니다.');
        $('#regPhone3').focus();
        return false;
    }

    var reqParam = {
        regName: regName.trim(),
        regPhone: regPhone1 + regPhone2 + regPhone3,
        regDevice: checkMobile() ? 'mobile' : 'pc',
        regDetail: getOsInfo().trim()
    };

    $.post('/api/regist.php', reqParam, function(jqXHR) {}, 'json' /* xml, text, script, html */ )
        .done(function(resultData) {
            console.log('[regist ajax success] result:: ', resultData);
            alert(resultData.message);

            if (resultData.result) {
                $('#regName').val('');
                $('#regPhone1').val('');
                $('#regPhone2').val('');
                $('#regPhone3').val('');
            }
        })
        // .fail(function(jqXHR) {})
        // .always(function(jqXHR) {})
    ;

}

// 공백이 있나 없나 체크 
function checkSpace(str) { if (str.search(/\s/) != -1) { return true; } else { return false; } }

// 특수 문자가 있나 없나 체크 
function checkSpecial(str) { var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; if (special_pattern.test(str) == true) { return true; } else { return false; } }

// 비밀번호 패턴 체크 (8자 이상, 문자, 숫자, 특수문자 포함여부 체크) 
function checkPasswordPattern(str) {
    var pattern1 = /[0-9]/; // 숫자 
    var pattern2 = /[a-zA-Z]/; // 문자 
    var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자 
    if (!pattern1.test(str) || !pattern2.test(str) || !pattern3.test(str) || str.length < 8) {
        alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
        return false;
    } else {
        return true;
    }
}