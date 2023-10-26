"use strict";
class Audio
{
  initialize()
  {    
    this.fx_ = new Map();
    this.music_ = new Map();
    this.musicSource_ = null;
    this.context_ = new AudioContext();
    this.dynamicsCompressorNode_ = this.context_.createDynamicsCompressor();
    this.dynamicsCompressorNode_.connect(this.context_.destination);
    this.fxGainNode_ = this.context_.createGain();
    this.fxGainNode_.connect(this.dynamicsCompressorNode_);
    this.musicGainNode_ = this.context_.createGain();
    this.musicGainNode_.connect(this.dynamicsCompressorNode_);
  }
  setFXVolume(gain)
  {
    this.fxGainNode_.gain.value = gain;
  }
  loadAndStartFX(id, data)
  {
    const self = this;
    this.context_.decodeAudioData(data, function(buffer)
    {
      self.fx_.set(id, buffer);
      self.startFX(id);
    });
  }
  startFX(id)
  {
    if (this.fx_.has(id))
    {
      const source = this.context_.createBufferSource();
      source.buffer = this.fx_.get(id);
      source.connect(this.fxGainNode_);
      source.start();
    }
  }
  setMusicVolume(gain)
  {
    if (this.isPaused_)
    {
      this.musicPauseVolume_ = gain;
    }
    else
    {
      this.musicGainNode_.gain.value = gain * 0.5;
    }
  }
  loadAndStartMusic(id)
  {
    const req = new XMLHttpRequest();
    req.open('GET', `./assets/audio/${id}` + ".ogg", true);
    req.responseType = 'arraybuffer';
    const self = this;
    req.onload = function()
    {
      self.context_.decodeAudioData(req.response, function(buffer)
      {
        self.music_.set(id, buffer);
        self.startMusic(id);
      });
    }
    req.send();
  }
  startMusic(id)
  {
    if (this.music_.has(id))
    {
      if (this.musicSource_ !== null)
      {
        this.musicSource_.stop();
      }
      this.musicSource_ = this.context_.createBufferSource();
      this.musicSource_.buffer = this.music_.get(id);
      this.musicSource_.loop = true;
      this.musicSource_.connect(this.musicGainNode_);
      this.musicSource_.start();
    }
  }
  pauseMusic()
  {
    this.musicPauseVolume_ = this.musicGainNode_.gain.value * 2;
    this.setMusicVolume(0);
    this.isPaused_ = true;
  }
  resumeMusic()
  {
    if (this.isPaused_)
    {
      this.isPaused_ = false;
      this.setMusicVolume(this.musicPauseVolume_);
    }
  }
}
