export const semesterOptionsMaker = (options: (string | number)[]) => {
    return options.map(item => ({
        label: item,
        value: item
    }))
}




// all Year option 
export const currentYear = new Date().getFullYear();
export const semesterAllYear = [0, 1, 2, 3, 4, 5].map(item => (item + currentYear).toString());
export const semesterYearOptions = semesterOptionsMaker(semesterAllYear)

// all Name Option 
export const semesterNames = ['Autumn', 'Summer', 'Fall']
export const semesterNameOptions = semesterOptionsMaker(semesterNames)

// all month option 
export const semesterMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const semesterMonthOptions = semesterOptionsMaker(semesterNames)