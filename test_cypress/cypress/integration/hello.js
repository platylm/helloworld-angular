describe('When open browser', function() {
    it('เปิดหน้าเว็บ /say', function() {
      cy.visit('http://localhost:4200/say')
    })
  })

  describe('Display Hello world', function() {
    it('แสดงข้อความสวัสดีชาวโลก', function() {
      cy.contains('h1','สวัสดีชาวโลก')
    })
  })