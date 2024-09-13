const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot31t2n5cv/",
            name: "springboot31t2n5cv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot31t2n5cv/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于学科门类的大学生兼职平台的设计与实现"
        } 
    }
}
export default base
