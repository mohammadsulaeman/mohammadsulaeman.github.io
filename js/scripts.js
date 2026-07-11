/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function toggleProjects(id,detailId){

    const row = document.getElementById(id);

    if(row.style.display === 'table-row'){
        row.style.display = 'none';
        document.getElementById(detailId).style.display = 'none';
    }else{
        row.style.display = 'table-row';
        document.getElementById(detailId).style.display = 'none';
    }
    
}

function showProject(
    title,
    description,
    specification,
    video,
    githubRepository,
    detailId
){

    const detail = document.getElementById(detailId);

    detail.querySelector('.projectTitle').innerText = title;
    detail.querySelector('.projectDescription').innerText = description;
    detail.querySelector('.projectSpecification').innerText = specification;
    detail.querySelector('.projectGithub').innerHTML = `<a href='${githubRepository}' target="blank">${title}</a>`;

    const videoElement = detail.querySelector('.projectVideo');

    videoElement.querySelector('source').src = video;

    videoElement.load();


    detail.style.display = 'block';
}

function closeDetail(detailId){

    const detail = document.getElementById(detailId);

    const video = detail.querySelector('.projectVideo');

    video.pause();
    video.currentTime = 0;


    detail.style.display = 'none';
}

function closeProjects(projectId, detailId){

    closeDetail(detailId);

    document.getElementById(projectId).style.display = 'none';
}