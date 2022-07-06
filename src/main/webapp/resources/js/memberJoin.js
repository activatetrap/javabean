function joinCheck(e){
   e.preventDefault(); //기본
   const mid = document.getElementById('mid');
   const email = document.getElementById('email');
   const passwd = document.getElementById('passwd');
   const passwdConfirm = document.getElementById('passwdConfirm');
   const name = document.getElementById('name');
   const birthday = document.getElementById('birthday');	
   const mobile = document.getElementById('mobile');
  /* console.log(mid.value);
   console.log(email.value);
   console.log(passwd.value);
   console.log(passwdConfirm.value);
   console.log(name.value);
   console.log(birthday.value);
   console.log(mobile.value);*/
   if (!mid.value){
      alert('아이디를 입력해주세요!');
      mid.focus();
      return ;
   }
   if (!email.value){
      alert('이메일을 입력해주세요!');
      email.focus();
      return ;
   }
   if (!passwd.value){
      alert('비밀번호를 입력해주세요!');
      passwd.focus();
      return ;
   }
   if (!passwdConfirm.value){
      alert('비밀번호 확인을 입력해주세요!');
      passwdConfirm.focus();
      return ;
   }
   if (passwd.value !== passwdConfirm.value){
      alert('비밀번호가 일치하지 않습니다!');
      passwdConfirm.focus();
      return ;
   }
   if (!name.value){
      alert('성명을 입력해주세요!');
      name.focus();
      return ;
   }
   if (!birthday.value){
      alert('생년월일을 입력해주세요!');
      birthday.focus();
      return ;
   }
   if (!mobile.value){
      alert('휴대폰 번호를 입력해주세요!');
      mobile.focus();
      return ;
   }   
   
   document.getElementById('frmJoin').submit();

}

function goPopup(path){
   //컨트롤러에 jusoPopup.jsp호출 요청   
   var pop = window.open(path + "/member/jusoPopup","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
}

$(document).ready(function(){
	$("#mod_mid").attr("readonly",true);
	
	
	/*if($("#gcode").val() == 1){
		$("#mod_mid").removeattr("readonly");	
		$("#mod_mid").css("background-color",'#eaedf1');
	}*/	
});

$(document).ready(function(){
	$("#mod_teamname").attr("readonly", true);
	/*if($("#gcode").val() == 1){
		$("#mod_teamname").removeattr("readonly");	
		$("#mod_mid").css("background-color",'#eaedf1');
	}*/	
	
});


$(document).ready(function(){
	$("#mod_gradename").attr("readonly", true);
	/*if($("#gcode").val() == 1){
		$("#mod_gradename").removeattr("readonly");	
		$("#mod_mid").css("background-color",'#eaedf1');
	}*/	
});


function jusoCallBack(zipNo,roadAddrPart1,addrDetail){
	//회원가입, 회원수정시 공통으로 사용하기위해서 form을 선택
	const forms = document.getElementsByTagName('form');
	console.log(forms[0]);
	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	forms[0].zipcode.value = zipNo;
	forms[0].addrload.value = roadAddrPart1;
	forms[0].addrdetail.value = addrDetail;
}
//수정 버튼을 클릭했을 때
function modifyCheck(e){
	e.preventDefault(); //기본

	const name = document.getElementById('name');
	const birthday = document.getElementById('birthday');
	const mobile = document.getElementById('mobile');
	const email = document.getElementById('email');
	const addrload = document.getElementById('addrload');
	const addrdetail = document.getElementById('addrdetail');
	
		if(name.value == ''){
			alert('필수입력 값입니다.');
			name.focus();
			return;
		}
		if(birthday.value == ''){
			alert('필수입력 값입니다.');
			birthday.focus();
			return;
		}
		if(mobile.value == ''){
			alert('필수입력 값입니다.');
			mobile.focus();
			return;
		}
		if(email.value == ''){
			alert('필수입력 값입니다.');
			email.focus();
			return;
		}
		if(addrload.value == ''){
			alert('필수입력 값입니다.');
			addrload.focus();
			return;
		}
		
	
	
	
	document.getElementById('membermodify').submit();
}


function pwCheck(e){
	e.preventDefault();
	const oldPasswd = document.getElementById('oldPasswd'); //기존 비밀번호
	const newPasswd = document.getElementById('newPasswd'); //새로운 비밀번호
	const newPasswdConfirm = document.getElementById('newPasswdConfirm');
	
	if(!oldPasswd.value){
		alert('기존비밀번호를 입력해주세요!');
		oldPasswd.focus();
		return;
	}
	if(newPasswd.value !== newPasswdConfirm.value){
		alert('변경 비밀번호가 일치하지 않습니다.')
		newPasswd.focus();
		return;
	}	
	document.getElementById('pwModify').submit();
}