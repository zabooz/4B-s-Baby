
export async function bruteForceLibrary(pwd) {
    const closeEnough = [];
    const normPwd = pwd.toLowerCase();

    let pwdFound = false;
    let startTime = Date.now();
    let time;

    try {
        const response = await fetch('../data/rockYou.json'); 
        const passwords = await response.json();

        if (passwords.lines.includes(pwd)) {
            time = ((Date.now() - startTime) / 1000) + ' sec';
            pwdFound = true;

            passwords.lines.forEach((pw) => {
                if (pw.toLowerCase().includes(normPwd)) {
                    closeEnough.push(pw);
                }
            });
        } else {
            time = 'N/A';
        }
    } catch (err) {
        console.log(err);
        time = 'N/A';
    }

    return [pwdFound, pwd, time, closeEnough];
}
