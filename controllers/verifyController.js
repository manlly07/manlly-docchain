const data = require("../data_business");
const compareText = (a, b) => {
    if (a !== b) {
        return false;
    }
    return true;
}
const checkFace = (a,b) => {
    let distance = (Math.abs(a - b) / Math.abs(a)) * 100;
    if( distance > 10) {
        return false;
    }
    return true;
}
const checkName = (a, b) => {
    return b.includes(a);
}
exports.verify = async (req, res) => {
    let request = req.body;
    let check = false;
    try {
        for (const item of data) {
            if (item.CandidateNumber === request.CandidateNumber) {
                if (
                    compareText(item.centreNumber, request.centreNumber) &
                    compareText(item.Date_Exam, request.Date_Exam) &
                    compareText(item.Birth, request.Birth) &
                    compareText(item.CEFR, request.CEFR) &
                    compareText(item.Listening, request.Listening) &
                    compareText(item.Reading, request.Reading) &
                    compareText(item.Writing, request.Writing) &
                    compareText(item.Speaking, request.Speaking) &
                    compareText(item.Overall, request.Overall) &
                    compareText(item.Date_Sign, request.Date_Sign) &
                    compareText(item.CandidateId, request.CandidateId) &
                    compareText(item.ReportFormNumber, request.ReportFormNumber) &
                    compareText(item.Sex, request.Sex) &
                    checkFace(item.rollAngle , request.rollAngle) &
                    checkFace(item.panAngle , request.panAngle) &
                    checkFace(item.tiltAngle , request.tiltAngle) & 
                    checkName(item.FamilyName, request.string_check) &
                    checkName(item.FirstName, request.string_check)
                ) {
                    check = true;                  
                    break;
                } 
            }
        }
        check ? res.json({ status: true }) : res.json({ status: false });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error, status: false });
    }
}
