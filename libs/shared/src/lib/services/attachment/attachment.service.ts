import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor() { }

  getContentType(file) {
    let contentType;
    if (file.name.split('.').pop().toLowerCase() === 'txt') {
      contentType = 'text/plain';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'png') {
      contentType = 'image/png';
    }
    else if ((file.name.split('.').pop().toLowerCase() === 'jpg') || (file.name.split('.').pop().toLowerCase() === 'jpeg')) {
      contentType = 'image/jpg';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'pdf') {
      contentType = 'application/pdf';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'ppt' || file.name.split('.').pop().toLowerCase() === 'pptx') {
      contentType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'doc' || file.name.split('.').pop().toLowerCase() === 'docx') {
      contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'xls' || file.name.split('.').pop().toLowerCase() === 'xlsx') {
      contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'rar') {
      contentType = 'application/x-rar-compressed';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'crt') {
      contentType = 'application/x-x509-ca-cert';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'zip' || file.name.split('.').pop().toLowerCase() === 'gz') {
      contentType = 'application/x-zip-compressed';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'p7b') {
      contentType = 'application/x-pkcs7-certificates';
    }
    else if (file.name.split('.').pop().toLowerCase() === 'html') {
      contentType = 'text/html';
    }
    else if (file.type.split('.').pop().toLowerCase() === 'htm') {
      contentType = 'text/htm';
    }
    else if (file.type.split('.').pop().toLowerCase() === 'msg') {
      contentType = 'msg';
    }
    return contentType;
  }

  createBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
