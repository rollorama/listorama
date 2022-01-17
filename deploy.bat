@echo on
rem ....................Start DEPLOY
@echo off

call firebase login

@echo off
rem ....................Build
@echo off
call ionic build
@echo on
rem ....................Deploy
@echo off
call firebase deploy --only hosting
@echo on
rem ....................End DEPLOY
@echo off
