<template>
	<div class="page-header">
		<h1>
			<router-link class="hidden-xs" :to="{ name: 'selection' }">
				Pokémon Battle
			</router-link>
			<slot></slot>	
		</h1>
		<div class="form-inline">
			<div class="form-group">
			    <select class="form-control" title="Framework">
				  <option>VueJS</option>
				  <option>React</option>
				</select>
			</div>
			<i v-on:click="help" class="btn btn-default fa fa-info-circle help" aria-hidden="true"></i>
		</div>
		<help ref="help"></help>
	</div>
</template>
<script src="./header.js"></script>
<style scoped src="./header.css"></style>