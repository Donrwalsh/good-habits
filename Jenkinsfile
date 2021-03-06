pipeline {
    agent { label 'local' }
	tools {
		maven 'Maven 3.5.4'
		jdk 'JDK8'
		nodejs 'Node'
	}
	environment {
		jar_file = 'server.jar'		
	}
    stages {
        stage('Build') {
            steps {
				echo 'Building..'
				dir("server") {
					sh 'mvn clean package -Dmaven.test.skip=true'
					dir("target") {
						stash includes: 'good-habits-0.0.1.jar', name: 'JAR'
						archiveArtifacts artifacts: '*.jar', fingerprint:true
					}
				}
				dir("client") {
				    sh 'npm install'
				    sh 'ng build --prod --build-optimizer'
					dir("dist/client") {
						stash includes: '**/*.*', name: 'frontend'
						archiveArtifacts artifacts: '**/*.*', fingerprint:true
					}
				}
				
            }
        }
        stage('Test') {
            steps {
				echo 'Testing...'
				node ('stage') {
					unstash "JAR"
					sh 'pkill good-habits || true'
					script {
						withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
							sh 'nohup java -jar good-habits-0.0.1.jar &'
						}
					}
					dir("/var/www/html") {
						unstash "frontend"
					}
				}
			}
		}
		stage('Deploy') {
            steps {
				echo 'Deploying...'
				node ('prod') {
					unstash "JAR"
					sh 'pkill good-habits || true'
					script {
						withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
							sh 'nohup java -jar good-habits-0.0.1.jar &'
						}
					}
					dir("/var/www/html") {
						unstash "frontend"
					}
				}
            }
        }
    }
	post {
        always {
            deleteDir() /* clean up our workspace */
        }        
    }
}