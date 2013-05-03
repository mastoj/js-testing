describe("The user view", function(){
    it("should show user info when rendered", function(){
        var data = '{"id":24046215,"id_str":"24046215","name":"Tomas Jansson","screen_name":"TomasJansson","location":"Oslo, Norway"}';
        var view, user;
        fakeResponse(data, {}, function() {
            user = new BEKK.User({username: "TomasJansson"});
            view = new BEKK.UserView({user: user, el: $("<ul></ul>")});
            user.fetch();
            user.trigger("change");
        })
        expect(view.$("h2")).toHaveText("Tomas Jansson");
    });

    xit("should update view when monolog is added", function() {
    });

});
