describe('E2E: GamesController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/games');
    });

    it('Should show correct header', function() {

        var h3 = element(by.tagName('h3'));
        var h3Text = h3.getText();
        expect(h3Text).toBe("Games");
    });
});