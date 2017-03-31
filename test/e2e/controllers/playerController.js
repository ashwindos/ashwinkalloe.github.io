describe('E2E: PlayerController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/players');
    });

    it('Should show correct header', function() {

        var h3 = element(by.tagName('h3'));
        var h3Text = h3.getText();
        expect(h3Text).toBe("Player");
    });
});