class MenuPage {

    selectorsList(){ 
     const selectors = {
        myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
        performanceButton:'[href="/web/index.php/performance/viewPerformanceModule"]',
        directoryButton:'[href="/web/index.php/directory/viewDirectory"]',
        maintenanceButton:'[href="/web/index.php/maintenance/viewMaintenanceModule"]',
        claimButton:'[href="/web/index.php/claim/viewClaimModule"]',
        buzzButton:'[href="/web/index.php/buzz/viewBuzz"]',
        recruitmentButton:'[href="/web/index.php/recruitment/viewRecruitmentModule"]',
        timeButton:'[href="/web/index.php/time/viewTimeModule"]',
        leaveButton:'[href="/web/index.php/leave/viewLeaveModule"]',
        pimButton:'[href="/web/index.php/pim/viewPimModule"]',
        adminButton:'[href="/web/index.php/admin/viewAdminModule"]',
        dashboardButton:'[href="/web/index.php/dashboard/index"]',
    
        
     }

       return selectors
  }
 
    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()   
    }
    accessPerformance(){
        cy.get(this.accessPerformance().performanceButton).click()
    }
    accessDirectory(){
        cy.get(this.accessDirectory().directoryButton).click()
    }
    accessMaintenance(){
        cy.get(this.accessMaintenance().maintenanceButton).click()
    }
    accessClaim(){
        cy.get(this.accessClaim().claimButton).click()
    }
    accessBuzz(){
        cy.get(this.accessBuzz().buzzButton).click()
    }
    accessRecruitment(){
        cy.get(this.accessRecruitment().recruitmentButton).click()
    }
    accessTime(){
        cy.get(this.accessTime().timeButton).click()
    }
    accessLeave(){
        cy.get(this.accessLeave().leaveButton).click()
    }
    accessPim(){
        cy.get(this.accessPim().pimButton).click()
    }
    accessAdmin(){
        cy.get(this.accessAdmin().adminButton).click()
    }
    accessDashboard(){
        cy.get(this.accessDashboard().dashboardButton).click()
    }
       
}

export default MenuPage