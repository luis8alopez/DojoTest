var supertest = require('supertest');
var chai = require('chai');
var should = require('should');
var assert = require('assert');
var app = require('../app/app');

//Levanta en background el server para hacer test
var request = supertest(app);
var expect = chai.expect;

describe('GET /setSecret:number', function(){
    it('should return code 200',function(done){
        request.get('/setSecret/1234')
        .expect(200)
        .end(function(err,res){
            if(err) return done (err)
            done(err) 
        });
    });

    it('should return JSON Content-Type application/Json',function(done){
        request.get('/setSecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            done(err) 
        });
    });

    it('should return a correct JSON Object',function(done){
        request.get('/setSecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.message);
            done() 
        });
    });
});

describe('GET /guess/:number',function(){
    it('should return code 200',function(done){
        request.get('/guess/1234')
        .expect(200)
        .end(function(err,res){
            if(err) return done (err)
            done(err) 
        });
    });

    it('should return JSON Content-Type application/Json',function(done){
        request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            done(err) 
        });
    });

    it('should return a correct JSON Object',function(done){
        request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            done() 
        });
    });

    it('should return a correct answer',function(done){
        request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            assert.equal('XXXX',res.body.result)
            done() 
        });
    });

    it('should return a correct answer',function(done){
        request.get('/setSecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.message);
            assert.equal('ok, let the game begin',res.body.message)
            done() 
        });
    });
});