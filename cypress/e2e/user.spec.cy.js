import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyUser(userData.userSuccess.username, userData.userSuccess.password )

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('first Name', 'last Name', 'Nick Name')
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', '54321', '2025-07-29')
    myInfoPage.fillStatus('1983-09-18', '3')
    myInfoPage.saveForm()

  })
    
})
