BUILD_CD=blog/

build: 
	$(shell cd $(BUILD_CD); ls)
	npm run build

push:
	git add * 
	git commit -m "commit from makefile" 
	git push origin master