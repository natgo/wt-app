pipeline {
  agent any
  tools {nodejs "NodeJS 16"}
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start Dev server') {
      steps {
        sh 'npm run dev'
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'npx cypress run'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
