import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ResumeSection = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Resume/CV
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, flex: 1, marginRight: 10 }}>
          <Text>Attach</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text>Dropbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text>Google Drive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5 }}>
            <Text>Enter manually</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: 12, color: '#666666', marginTop: 5 }}>File types: pdf, doc, docx, txt, rtf</Text>
    </View>
  );
};

const CoverLetterSection = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Cover Letter
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, flex: 1, marginRight: 10 }}>
          <Text>Attach</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text>Dropbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text>Google Drive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5 }}>
            <Text>Enter manually</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: 12, color: '#666666', marginTop: 5 }}>File types: pdf, doc, docx, txt, rtf</Text>
    </View>
  );
};

const FileUploadForm = () => {
  return (
    <View>
      <ResumeSection />
      <CoverLetterSection />
    </View>
  );
};

export default FileUploadForm;