 
 describe('Форма логина', function () {
   it('Авторизация (+)', function () {
        cy.visit('https://hh.ru');
        cy.get(".supernova-login-wrapper.supernova-navi-item_button > .supernova-button").click();
        cy.contains('Поиск работы');
        cy.get(':nth-child(2) > .magritte-link___b4rEM_4-3-2 > .magritte-text___pbpft_3-0-15 > .magritte-text___tkzIl_4-3-2')
         .should('be.visible').click();
      cy.get(':nth-child(7) > .magritte-position-container___kZnvZ_6-0-9')
         .type('tomina.lily@yandex.ru');
      cy.get('.magritte-with-right___NUNiP_6-0-9 > .magritte-position-container___kZnvZ_6-0-9')
         .type('Mayusha2017');
      cy.get('.account-login-actions > .magritte-button___Pubhr_5-1-12 > .magritte-button-view___53Slm_5-1-12')
         .click();
      cy.contains('Вакансии для вас');
    })

   it('Авторизация (-)', function () {
      cy.visit('https://hh.ru/');
      cy.get('.supernova-login-wrapper.supernova-navi-item_button > .supernova-button')
         .should('be.visible').click();
      cy.contains('Поиск работы');
      cy.get(':nth-child(2) > .magritte-link___b4rEM_4-3-2 > .magritte-text___pbpft_3-0-15 > .magritte-text___tkzIl_4-3-2')
         .should('be.visible').click();
      cy.get(':nth-child(7) > .magritte-position-container___kZnvZ_6-0-9')
         .type("tomina.lily@yandex.ru");
      cy.get('.magritte-with-right___NUNiP_6-0-9 > .magritte-position-container___kZnvZ_6-0-9')
         .type("Mayusha2018");
      cy.get('.account-login-actions > .magritte-button___Pubhr_5-1-12 > .magritte-button-view___53Slm_5-1-12')
         .click();
      cy.contains('Неправильные данные для входа. Пожалуйста, попробуйте снова.');
         })


   it('Отклики click', function () {
      cy.visit('https://hh.ru');
      cy.get(".supernova-login-wrapper.supernova-navi-item_button > .supernova-button").click();
      cy.contains('Поиск работы');
      cy.get(':nth-child(2) > .magritte-link___b4rEM_4-3-2 > .magritte-text___pbpft_3-0-15 > .magritte-text___tkzIl_4-3-2')
         .should('be.visible').click();
      cy.get(':nth-child(7) > .magritte-position-container___kZnvZ_6-0-9')
         .type('tomina.lily@yandex.ru');
      cy.get('.magritte-with-right___NUNiP_6-0-9 > .magritte-position-container___kZnvZ_6-0-9')
         .type('Mayusha2017');
      cy.get('.account-login-actions > .magritte-button___Pubhr_5-1-12 > .magritte-button-view___53Slm_5-1-12')
         .click();
      cy.contains('Вакансии для вас');
      cy.get('[data-page-analytics-event="negotiation_list_dashboard"] > .magritte-content___-hu36_4-0-9 > .magritte-text___RFLJj_4-0-9 > .magritte-container___mF4Tb_4-0-9 > .magritte-text-dynamic___71-Al_3-0-15 > .magritte-text___hzlS4_4-0-9 > .magritte-text___pbpft_3-0-15')
         .click();
      cy.contains('Активные');
      cy.contains('Все отклики');
         })
})
