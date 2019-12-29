const loginDataList = [
	{
		email: 'user@gmail.com',
		password:  'UserPass'
	},
	{
		email: 'admin@gmail.com',
		password:  'AdminPass'
	}
];
const emailLength = 5;
const passLength = 6;

const inputEmail = prompt('Enter your email:');

if(!inputEmail) {
	alert('Canceled');
} else if(inputEmail.length < emailLength) {
	alert('I don\'t know any emails having name length less than 5 symbols');
} else {
	let loginData = loginDataList.find(data => data.email === inputEmail);
	
	if(loginData) {
		let inputPass = prompt('Enter password:');
		if(!inputPass) {
			alert('Canceled');
		} else if(inputPass === loginData.password) {
			const changePass = confirm('Do you want to change your password?');
			if(!changePass) {
				alert('You have failed the change.');
			} else {
				inputPass = prompt('Enter old password:');
				if(!inputPass) {
					alert('Canceled');
				} else if(inputPass === loginData.password) {
					inputPass = prompt('Enter new password:');
					if(!inputPass) {
						alert('Canceled');
					} else if(inputPass.length < passLength) {
						alert('It’s too short password. Sorry.');
					} else {
						const repeatPass = prompt('Repeat new password:');
						if(inputPass === repeatPass) {
							alert('You have successfully changed your password.');
						} else {
							alert('You wrote the wrong password.');
						}
					}
				} else {
					alert('Wrong password');
				}
			}
		} else {
			alert('Wrong password');
		}
	} else {
		alert('I don’t know you');
	}
}

