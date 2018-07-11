BUILD_CD = blog/

build: 
	echo Install npm modules and build
	cd $(BUILD_CD) && npm install && npm run build 

push:
	echo add, commit and push
	git add * 
	git commit -m "commit from makefile" 
	git push origin master

post: | build push