package com.my.project.dto;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class Board {
	private int bnum;
	private String username;
	private String mid;
	private String subject;
	private String content;
	private int readcnt;
	private int likecnt;
	private int dislikecnt;
	private Date regidate;
	private String createtime;
	private Date modidate;
	private String removeyn;
	private int replycnt;
	
	List<MultipartFile> files; //파일들 

	public int getBnum() {
		return bnum;
	}

	public void setBnum(int bnum) {
		this.bnum = bnum;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMid() {
		return mid;
	}

	public void setMid(String mid) {
		this.mid = mid;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getReadcnt() {
		return readcnt;
	}

	public void setReadcnt(int readcnt) {
		this.readcnt = readcnt;
	}

	public int getLikecnt() {
		return likecnt;
	}

	public void setLikecnt(int likecnt) {
		this.likecnt = likecnt;
	}

	public int getDislikecnt() {
		return dislikecnt;
	}

	public void setDislikecnt(int dislikecnt) {
		this.dislikecnt = dislikecnt;
	}

	public Date getRegidate() {
		return regidate;
	}

	public void setRegidate(Date regidate) {
		this.regidate = regidate;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public Date getModidate() {
		return modidate;
	}

	public void setModidate(Date modidate) {
		this.modidate = modidate;
	}

	public String getRemoveyn() {
		return removeyn;
	}

	public void setRemoveyn(String removeyn) {
		this.removeyn = removeyn;
	}

	public int getReplycnt() {
		return replycnt;
	}

	public void setReplycnt(int replycnt) {
		this.replycnt = replycnt;
	}

	public List<MultipartFile> getFiles() {
		return files;
	}

	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}

	@Override
	public String toString() {
		return "Board [bnum=" + bnum + ", username=" + username + ", mid=" + mid + ", subject=" + subject + ", content="
				+ content + ", readcnt=" + readcnt + ", likecnt=" + likecnt + ", dislikecnt=" + dislikecnt
				+ ", regidate=" + regidate + ", createtime=" + createtime + ", modidate=" + modidate + ", removeyn="
				+ removeyn + ", replycnt=" + replycnt + ", files=" + files + "]";
	}

	
}
